import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies/movies.service';
import Movie from 'src/app/models/Movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.movies = this.activatedRoute.snapshot.data[0].results.slice(0, 12);
  }

  ngOnInit() { }



}


