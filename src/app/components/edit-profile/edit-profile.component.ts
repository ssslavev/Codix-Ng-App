import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/core/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  user: User;
  userId = localStorage.getItem('logged-user-id');

  constructor(private authService: AuthService, private router: Router) { }



  ngOnInit() {
    this.authService.findUserById(this.userId)
      .subscribe((user) => {
        // console.log(user.nickname);
        this.user = user;
      });

  }


  updateUser() {
    this.authService.updateUser(this.user)
      .subscribe(() => {
        localStorage.setItem('logged-user-nickname', this.user.nickname);
        this.router.navigate(['/myprofile']);
      });
  }


}
