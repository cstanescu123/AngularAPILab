import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { MovieClientService } from '../movie-client.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieClientService: MovieClientService
  ) { }

  movie$ = this._activatedRoute.paramMap.pipe(
    map(params => params.get('id')),
    filter(id => id !== null),
    map(id => parseInt(id as string, 10)),
    switchMap((id: number) => this._movieClientService.getMovie(id)),
  )

  ngOnInit(): void {
  }

}
