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

  userExists: boolean;
  emailExists: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
    const { nickname, email, phone, country, passwords } = form.value;
    this.authService.signup(nickname, email, phone, country, passwords.password)
      .subscribe(() => {
        const { nickname, passwords, checkbox } = form.value;
        this.authService.signin(nickname, passwords.password, checkbox)
          .subscribe((data) => {
            // console.log(data);
            localStorage.setItem('token', data['token']);
            localStorage.setItem('logged-user-id', data['userId']);
            localStorage.setItem('logged-user-nickname', data['nickname']);
            this.router.navigate(['/myprofile']);
          }, err => console.error(err)
          );

      });

  }

  onKey(value: string) {

    this.authService.findUserByNickname(value)
      .subscribe((data) => {
        if (data['status'] === true) {
          this.userExists = true;
        } else {
          this.userExists = false;
        }
      });
  }

  onEmailKeyPress(value: string) {

    this.authService.findIfEmailExists(value)
      .subscribe((data) => {
        if (data['status'] === true) {
          this.emailExists = true;
        } else {
          this.emailExists = false;
        }
      });
  }

}
