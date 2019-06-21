import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movieList: Movie[] = [];
  searchQuery: string;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getSearchedMovies('redemption').subscribe ((movies: Movie[]) => {
      this.movieList = movies;
      console.log(this.movieList);
    });
  }

  onQueryChange(searchQuery: string) {
    this.movieService.getSearchedMovies(this.searchQuery).subscribe((movies: Movie[]) => {
      this.movieList = movies;
      console.log(this.movieList);
    });
  }

}
