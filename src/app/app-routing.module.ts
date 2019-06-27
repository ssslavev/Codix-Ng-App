import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'myprofile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MoviesComponent },
  { path: '', redirectTo: '/myprofile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
