import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/Actor';
import { ActorService } from 'src/app/services/actor.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actors: Actor[] = [];
  imageUrl = environment.imagesEndpoint;
  constructor(
    private actorService: ActorService
  ) { }
  //public count:number;

  ngOnInit(): void {
    this.actorService.getActorsByPopularity(1)
      .subscribe((resp: any) => {
        this.actors = resp.results;
        console.log(this.actors);
      });
  }

}
