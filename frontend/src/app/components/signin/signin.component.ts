import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  loginUser(form: NgForm) {

    const { nickname, password } = form.value;
    this.authService.signin(nickname, password)
      .subscribe((data) => {
        localStorage.setItem('token', data['token']);
        localStorage.setItem('logged-user-id', data['userId']);
        localStorage.setItem('logged-user-nickname', data['nickname']);
        this.router.navigate(['/myprofile']);
      })
  }
}
