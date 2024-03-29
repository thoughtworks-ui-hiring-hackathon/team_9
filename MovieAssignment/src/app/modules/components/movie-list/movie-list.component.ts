import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import { Genres } from 'src/app/models/genres.modal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() moviesType: string;
  movieList: Movie[] = [];
  genresList: Genres[];
  config = {
    autoplay: 3000, // Autoplay option having value in milliseconds
    initialSlide: 3, // Slide Index Starting from 0
    slidesPerView: 3, // Slides Visible in Single View Default is 1
    pagination: '.swiper-pagination', // Pagination Class defined
    paginationClickable: true, // Making pagination dots clicable
    nextButton: '.swiper-button-next', // Class for next button
    prevButton: '.swiper-button-prev', // Class for prev button
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    observer: true,
observeParents: true // Space between each Item
  };
  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const movieID = this.activatedRoute.snapshot.params['id'];
    if (this.moviesType === 'Trending') {
      this.movieService.getTrendingMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
      });
    } else if (this.moviesType === 'Latest') {
      this.movieService.getLatestMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
      });
    } else if (this.moviesType === 'Related') {
      this.movieService.getRelatedMovies(movieID).subscribe((movies: Movie[]) => {
        this.movieList = movies;
      });
     } else {
      this.movieService.getPopularMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
      });
    }
    this.getGenres();
  }
  getGenres() {
    this.movieService.getGenres().subscribe((genres: Genres[]) => {
      this.genresList = genres;
    });
  }
}
