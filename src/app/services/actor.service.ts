import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  urlMovies = `${environment.moviesEndpoint}/person`
  constructor(
    private http: HttpClient
  ) { }
  getActorsByPopularity(page: number) {
    let urlPopularity = `${this.urlMovies}/popular?api_key=b2654a09df86a4f38994b4c50903c874&language=es&page=${page}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(urlPopularity, {headers: headers});
  }
}
