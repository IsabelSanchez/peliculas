import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  imageUrl = environment.imagesEndpoint;
  constructor(
    private moviesService: MovieService
  ) {
    console.log('CONSTRUCTOR');
  }
  ngOnInit(): void {
    this.moviesService.getMoviesByPopularity(1)
      .subscribe( ( resp: any ) => {
        this.movies = resp.results;
      });
  }

}
