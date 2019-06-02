import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(nickname: string, email: string, phone: string, country: string, password: string) {

    return this.http.post('http://localhost:3000/api/signup', { nickname, email, country, phone, password });
  }

  signin(nickname: string, password: string) {
    return this.http.post('http://localhost:3000/api/signin', { nickname, password });
  }

  findUserByNickname(nickname: string) {
    return this.http.post('http://localhost:3000/api/user', { nickname })

  }

  findIfEmailExists(email: string) {
    return this.http.post('http://localhost:3000/api/email', { email });
  }

  findUserById(id: string) {
    return this.http.get<User>(`http://localhost:3000/api/user/${id}`);
  }
}


