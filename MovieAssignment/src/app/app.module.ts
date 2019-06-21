import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared components/header/header.component';
import { FooterComponent } from './modules/shared components/footer/footer.component';
import { HomePageComponent } from './modules/components/home-page/home-page.component';
import { DetailsPageComponent } from './modules/components/details-page/details-page.component';
import { MovieListComponent } from './modules/components/movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    DetailsPageComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
