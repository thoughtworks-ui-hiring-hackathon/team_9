import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = '2bc49ac29568477c0075c56cba2ed307';
  constructor(private httpClient: HttpClient) { }

  getTrendingMovies (): Observable<Movie[]> {
    return this.httpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=' + this.apiKey)
      .pipe(map(data => {
        return data['results'];
      }) );
    }

  getLatestMovies (): Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key='
    + this.apiKey + '&language=en-US&include_adult=false')
    .pipe(map(data => {
      return data['results'];
    }) );
  }

  getPopularMovies (): Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1')
    .pipe(map(data => {
      return data['results'];
    }) );
  }
  getGenres(): Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + this.apiKey + '&language=en-US&page=1')
    .pipe(map(data => {
      return data['genres'];
    }) );
  }
  
}
