import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Movie } from '../models/Movie';
import { MovieClientService } from '../movie-client.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit {

  movies$ = this.movieClientService.getMovies();

  movies: Movie[] = [];

  constructor(private movieClientService: MovieClientService) { }

  ngOnInit(): void {
    this.movieClientService.getMovies().subscribe(movies => {
      this.movies = movies;
    })
  }

  deleteMovie(id: number) {
    this.movieClientService.deleteMovie(id).pipe(
      switchMap(() => this.movieClientService.getMovies())
    ).subscribe(movies => {
      this.movies = movies
    });
  }
}
