import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Imovie } from '../../modals/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesArray: Array<Imovie> = []
  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.getTrendingMovies()
      .subscribe(res => {
        this.moviesArray = res
      })
  }

}
