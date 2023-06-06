import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Imovie } from '../../modals/movies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId !: number;
  movie !: Imovie
   constructor(private _route : ActivatedRoute, 
      private _movieService : MovieService) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((params : Params) => {
        this.movieId = +params['id'];
      this._movieService.getMovieDetails(this.movieId)
        .subscribe(res => this.movie = res)
      })
  }

}
