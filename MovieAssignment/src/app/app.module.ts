import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared components/header/header.component';
import { FooterComponent } from './modules/shared components/footer/footer.component';
import { HomePageComponent } from './modules/components/home-page/home-page.component';
import { DetailsPageComponent } from './modules/components/details-page/details-page.component';
import { MovieListComponent } from './modules/components/movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { MovieDetailsComponent } from './modules/components/movie-details/movie-details.component';
import { MovieSearchComponent } from './modules/components/movie-search/movie-search.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    DetailsPageComponent,
    MovieListComponent,
    MovieDetailsComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angular2UsefulSwiperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
