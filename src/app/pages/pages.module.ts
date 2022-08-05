import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { MoviesComponent } from './movies/movies.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routing';
import { ActorComponent } from './actor/actor.component';
import { PipesModule } from '../pipes/pipes.module';
import { movieIdComponent } from './movieId/movieId.component';

@NgModule({
  declarations: [
    PagesComponent,
    MoviesComponent,
    ActorComponent,
    movieIdComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    PAGES_ROUTES,
    PipesModule
  ]
})
export class PagesModule { }
