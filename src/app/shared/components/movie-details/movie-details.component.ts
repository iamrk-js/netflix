import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Imovie } from '../../modals/movies';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  movie!: Imovie;
  backgroundImage = `https://image.tmdb.org/t/p/w1280`;
  movietrailers: any[] = [];
  trailerUrl!:SafeResourceUrl;
  constructor(
    private _route: ActivatedRoute,
    private _movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.movieId = +params['id'];
      this._movieService.getMovieDetails(this.movieId).subscribe((res) => {
        this.movie = res;
        this.backgroundImage = `https://image.tmdb.org/t/p/w1280${res.poster_path}`;
      });
    });
    this._movieService.getMovieTrailer(this.movieId).subscribe((res:any) => {
      console.log(res);
      this.movietrailers = res.results
    });
  }

  runTrailer(id:string){
      console.log(id)
      // window.open(`https://www.youtube.com/watch?v=${id}`)
     const url = `https://www.youtube.com/embed/${id}`
     this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
