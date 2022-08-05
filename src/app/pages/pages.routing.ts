import { RouterModule, Routes } from "@angular/router";
import { ActorComponent } from "./actor/actor.component";
import { MoviesComponent } from "./movies/movies.component";
import { movieIdComponent } from "./movieId/movieId.component";

const PagesRoutes: Routes = [
    {
      path: 'movies',
      component: MoviesComponent
    },
    {
      path: 'actors',
      component: ActorComponent
    },
    {
      path: 'movieId',
      component: movieIdComponent
    },
    {
      path: '',
      redirectTo: '/movies',
      pathMatch: 'full'
    }
];
export const PAGES_ROUTES = RouterModule.forChild(PagesRoutes);
