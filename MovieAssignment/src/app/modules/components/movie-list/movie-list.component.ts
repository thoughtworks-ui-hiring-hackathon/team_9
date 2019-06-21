import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Genres } from 'src/app/models/genres.modal';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() moviesType: string;
  movieList: Movie[];
  genresList: Genres[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    if (this.moviesType === 'Trending') {
      this.movieService.getTrendingMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
        console.log(this.movieList);
      });
    } else if (this.moviesType === 'Latest') {
      this.movieService.getLatestMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
      });
    } else {
      this.movieService.getPopularMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
      });
    }
    this.getGenres();
  }
  getGenres(){
    this.movieService.getGenres().subscribe((genres: Genres[]) => {
      this.genresList = genres;
      console.log(this.genresList);
    });
  }

}
