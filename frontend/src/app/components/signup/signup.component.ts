import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
    const { nickname, email, phone, country, passwords } = form.value;
    this.authService.signup(nickname, email, phone, country, passwords.password)
      .subscribe(() => {
        const { nickname, passwords } = form.value;
        this.authService.signin(nickname, passwords.password)
          .subscribe((data) => {
            console.log(data);
            localStorage.setItem('token', data['token']);
            localStorage.setItem('logged-user-id', data['userId']);
            localStorage.setItem('logged-user-nickname', data['nickname']);
            this.router.navigate(['/myprofile']);
          }, err => console.error(err)
          )

      })

  }

}
