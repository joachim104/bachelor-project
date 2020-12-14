import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://api.bachelor.hololink.io';

  createUser(username: string) {
    const newUser = {
      username: username,
    };
    return this.http
      .post<any>(`${this.baseUrl}/treasurehunt/createUser`, newUser)
      .subscribe((resp) => {
        console.log('resp', resp);
      });
  }

  getUser(id: string) {
    return this.http.get<any>(`${this.baseUrl}/treasurehunt/getUser/${id}`);
  }
}
