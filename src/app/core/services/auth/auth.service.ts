import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User';

const API_URL = 'https://codix-rest-api.herokuapp.com/api';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(nickname: string, email: string, phone: string, country: string, password: string) {

    return this.http.post(API_URL + '/signup', { nickname, email, country, phone, password });
  }

  signin(nickname: string, password: string, checkbox: any) {
    return this.http.post(API_URL + '/signin', { nickname, password, checkbox });
  }

  findUserByNickname(nickname: string) {
    return this.http.post(API_URL + '/user', { nickname });

  }

  findIfEmailExists(email: string) {
    return this.http.post(API_URL + '/email', { email });
  }

  findUserById(id: string) {
    return this.http.get<User>(API_URL + `/user/${id}`);
  }

  updateUser(user) {
    return this.http.put(API_URL + '/edit', { user });
  }
}


