import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AuthGuard } from './core/guards/auth.guard';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CoreModule } from './core/core.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService } from './core/services/movies/movies.service';
import { MovieComponent } from './components/movie/movie.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    SigninComponent,
    MyProfileComponent,
    EditProfileComponent,
    MoviesComponent,
    MovieComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    CoreModule
  ],
  providers: [
    AuthGuard,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
