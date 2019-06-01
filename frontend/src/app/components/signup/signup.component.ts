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
    console.log(form.value);
    const { nickname, email, country, phone, passwords } = form.value;

    this.authService.signup(nickname, email, country, phone, passwords.password)
      .subscribe(() => {
        this.router.navigate(['/signin']);
      })

  }

}
