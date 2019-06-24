import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, DoCheck {


  isLoggedIn;
  nickname;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    this.isLoggedIn = localStorage.getItem('logged-user-id');
    this.nickname = localStorage.getItem('logged-user-nickname');
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/signin']);
  }



}
