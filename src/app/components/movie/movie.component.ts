import { Component, OnInit, Input } from '@angular/core';
import Movie from 'src/app/models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie;
  imagePath: string;

  constructor() { }

  ngOnInit() {
    this.imagePath = 'http://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }

}
