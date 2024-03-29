import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/components/home-page/home-page.component';
import { MovieDetailsComponent } from './modules/components/movie-details/movie-details.component';
import { MovieSearchComponent } from './modules/components/movie-search/movie-search.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail/:id', component: MovieDetailsComponent},
  { path: 'movie-search', component: MovieSearchComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
