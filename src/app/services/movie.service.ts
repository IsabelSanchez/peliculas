import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlMovies = `${environment.moviesEndpoint}/movie`
  constructor(
    private http: HttpClient
  ) { }
  getMoviesByPopularity(page: number) {
    let urlPopularity = `${this.urlMovies}/popular?api_key=73d13855e07f6c076d397bfd7c5d6111&language=es&page=${page}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(urlPopularity, {headers: headers});
  }
}
