import { Component, OnInit } from '@angular/core';
import { MovieIdService } from 'src/app/services/movieId.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movieId.component',
  templateUrl: './movieId.component.html',
  styleUrls: ['./movieId.component.css']
})
export class movieIdComponent implements OnInit {

  imageUrl = environment.imagesEndpoint;

  constructor(
    private movieIdService: MovieIdService
  ) { }

  ngOnInit(): void {
    this.movieIdService.getMoviesById(453395)
    .subscribe((resp: any) => {
      console.log(resp);
    });
  }

}
