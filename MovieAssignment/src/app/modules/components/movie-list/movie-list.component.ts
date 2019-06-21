import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import {SwiperComponent} from 'angular2-useful-swiper';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() moviesType: string;
  movieList: Movie[];
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
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    console.log(this.moviesType);
   // this.slides = this.chunk(this.cards, 3);
    if (this.moviesType === 'Trending') {
      this.movieService.getTrendingMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
        console.log(this.movieList);
      });
    } else if (this.moviesType === 'Latest') {
      this.movieService.getLatestMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
        console.log(this.movieList);
      });
    } else {
      this.movieService.getPopularMovies().subscribe((movies: Movie[]) => {
        this.movieList = movies;
        console.log(this.movieList);
      });
    }
  }

}
