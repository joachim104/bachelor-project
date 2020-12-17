import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://api.bachelor.hololink.io';

  createUser(username: string) {
    return this.http
      .post<any>(`${this.baseUrl}/treasurehunt/createUser`, {
        username: username,
      })
      .subscribe((resp) => {
        localStorage.setItem('userId', resp);
      });
  }

  getUser(id: string) {
    return this.http.get<any>(`${this.baseUrl}/treasurehunt/getUser/${id}`);
  }

  getTopTenUsers() {
    return this.http.get<any>(`${this.baseUrl}/treasurehunt/getTopTenUsers`);
  }
}
