import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: User;
  userId = localStorage.getItem('logged-user-id');
  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.authService.findUserById(this.userId)
      .subscribe((user) => {
        console.log(user.nickname);
        this.user = user;
      })
  }

}
