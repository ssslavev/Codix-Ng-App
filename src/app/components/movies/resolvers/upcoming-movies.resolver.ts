import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import Movie from 'src/app/models/Movie';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies/movies.service';


@Injectable({
    providedIn: 'root'
})
export class UpcomingtMoviesResolver implements Resolve<Movie[]> {

    constructor(private moviesService: MoviesService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
        return this.moviesService.getUpcomingMovies();
    }
}
