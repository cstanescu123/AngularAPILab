import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: "",
    component: MovieHomeComponent
  },
  {
    path: "movie/:id",
    component: MovieComponent
  },
  {
    path: "add-movie",
    component: AddMovieFormComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
