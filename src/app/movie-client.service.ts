import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, PostMovie } from './models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieClientService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = "https://localhost:5001/movie";

  getMovies() { 
    return this.httpClient.get<Array<Movie>>(this.baseUrl);
  }

  // Angular -> Http Request -> API Controller -> Sql Database -> API Controller -> Http Response -> Angular Subscribes to response data
  getMovie(id: number) { 
    return this.httpClient.get<Movie>(`${this.baseUrl}/${id}`);
  }

// Angular -> Http Request -> API Controller -> Sql Database -> API Controller -> Http Response -> Angular Subscribes to response data
  postMovie(movie: PostMovie) {
    return this.httpClient.post<Movie>(this.baseUrl, movie);
  }

  // Angular -> Http Request -> API Controller -> Sql Database -> API Controller -> Http Response -> Angular Subscribes to response data
  deleteMovie(id: number) {
    return this.httpClient.delete<Movie>(`${this.baseUrl}/${id}`);
  }

}
