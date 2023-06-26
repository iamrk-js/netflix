import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SnackbarService } from './snackbar.service';
import { Imovie, Iroot } from '../modals/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseurl: string = environment.baseurl;
  apikey: string = environment.apiKey
  constructor(private _http: HttpClient, private snackBar: SnackbarService) { }

  getTrendingMovies(): Observable<Imovie[]> {
    let trendingUrl = `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    return this._http.get<Iroot>(trendingUrl)
      .pipe(
        map(res =>  res.results),
        catchError((err: any) => {
          this.snackBar.openSnackbar(err.error.status_message, 'close')
          return of(err.error.status_message)
        })
      )
  }

  bannerApiData(): Observable<any> {
    return this._http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}`);
  }

  fetchActionMovies(): Observable<any> {
    return this._http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  getMovieDetails(id: number): Observable<any> {
    return this._http.get(`${this.baseurl}/movie/${id}?api_key=${this.apikey}`)
  }
}
