import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(nickname: string, email: string, phone: string, country: string, password: string) {

    return this.http.post('http://localhost:3000/api/signup', { nickname, email, country, phone, password });
  }
}


