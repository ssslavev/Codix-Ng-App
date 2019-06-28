import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Movie from 'src/app/models/Movie';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '?api_key=72b573c8a470f44c1e765a0164622c21';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + '/popular' + API_KEY);

  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + '/upcoming' + API_KEY);
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + '/top_rated' + API_KEY);
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL + '/now_playing' + API_KEY);
  }
}
