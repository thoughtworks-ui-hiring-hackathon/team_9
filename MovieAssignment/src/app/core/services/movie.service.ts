import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = '';
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

  getMovieDetails(movieId: string): Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + this.apiKey
     + '&language=en-US&append_to_response=credits').pipe(map(data => {
       console.log(data);
      return data;
    }) );
  }

  getPopularMovies (): Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1')
    .pipe(map(data => {
      return data['results'];
    }) );
  }

  getRelatedMovies (movieId: string): Observable<Movie[]> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=' + this.apiKey + 
    '&language=en-US&page=1')
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

  getSearchedMovies (searchCriteria: string): Observable<Movie[]> {
    return this.httpClient.get('https://api.themoviedb.org/3/search/multi?api_key=' + this.apiKey +
      '&language=en-US&query=' + searchCriteria + '&page=1&include_adult=false')
    .pipe(map(data => {
      return data['results'];
    }) );
  }
}
