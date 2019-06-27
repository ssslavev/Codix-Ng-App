import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies/movies.service';
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Movie[];
  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(movies => {
      this.popularMovies = movies;
      console.log(movies['results']);
    });
  }

}
