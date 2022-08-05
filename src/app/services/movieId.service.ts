import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieIdService {
  urlMovies = `${environment.moviesEndpoint}/movie`

  constructor(
    private http: HttpClient
  ) { }

  getMoviesById(movie_id: number) {
    //https://api.themoviedb.org/3/movie/526896?api_key=73d13855e07f6c076d397bfd7c5d6111&language=es
    let urlMovieId = `${this.urlMovies}/${movie_id}?api_key=73d13855e07f6c076d397bfd7c5d6111&language=es`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(urlMovieId, {headers: headers});
  }
}
