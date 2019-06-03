import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(nickname: string, email: string, phone: string, country: string, password: string) {

    return this.http.post('https://codix-rest-api.herokuapp.com/api/signup', { nickname, email, country, phone, password });
  }

  signin(nickname: string, password: string, checkbox: any) {
    return this.http.post('https://codix-rest-api.herokuapp.com/api/signin', { nickname, password, checkbox });
  }

  findUserByNickname(nickname: string) {
    return this.http.post('https://codix-rest-api.herokuapp.com/api/user', { nickname })

  }

  findIfEmailExists(email: string) {
    return this.http.post('https://codix-rest-api.herokuapp.com/api/email', { email });
  }

  findUserById(id: string) {
    return this.http.get<User>(`https://codix-rest-api.herokuapp.com/api/user/${id}`);
  }

  updateUser(user) {
    return this.http.put('https://codix-rest-api.herokuapp.com/api/edit', { user })
  }
}


