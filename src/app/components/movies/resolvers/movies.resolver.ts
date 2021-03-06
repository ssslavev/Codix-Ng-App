import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import Movie from 'src/app/models/Movie';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies/movies.service';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MoviesResolver implements Resolve<Movie[]> {

    constructor(private moviesService: MoviesService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
        return this.moviesService.getPopularMovies();
    }
}
