import { Component, OnInit } from '@angular/core';
import { MovieService } from './shared/services/movie.service';
import { SnackbarService } from './shared/services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'netflix';
  constructor(private _movieService : MovieService, private _snackBarService : SnackbarService){

  }
  ngOnInit(): void {
    //   this._movieService.getTrendingMovies()
    //  .subscribe(
    //       (res) => {
    //         console.log(res);
    //       }
    //     )
  }
}
