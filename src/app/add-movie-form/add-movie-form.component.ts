import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostMovie } from '../models/Movie';
import { MovieClientService } from '../movie-client.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.css']
})
export class AddMovieFormComponent {
  constructor(private _movieClientService: MovieClientService) { }


  addMovieFormGroup = new FormGroup({
    Title: new FormControl(''),
    Genre: new FormControl(''),
    Year: new FormControl(''),
    Actor: new FormControl(''),
    Director: new FormControl(''),
  })

  submitMovie() {
    const postMovie: PostMovie = this.addMovieFormGroup.value;
    this._movieClientService.postMovie(postMovie).subscribe();
  }
}