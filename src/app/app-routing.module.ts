import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesResolver } from './components/movies/resolvers/movies.resolver';
import { UpcomingtMoviesResolver } from './components/movies/resolvers/upcoming-movies.resolver';
import { TopRatedMoviesResolver } from './components/movies/resolvers/top-rated-movies.resolver';
import { NowPlayingMoviesResolver } from './components/movies/resolvers/now-playing-movies.resolver';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'myprofile', component: MyProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MoviesComponent, resolve: [MoviesResolver] },
  { path: 'upcoming-movies', component: MoviesComponent, resolve: [UpcomingtMoviesResolver] },
  { path: 'top-rated-movies', component: MoviesComponent, resolve: [TopRatedMoviesResolver] },
  { path: 'now-playing-movies', component: MoviesComponent, resolve: [NowPlayingMoviesResolver] },
  { path: '', redirectTo: '/myprofile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
