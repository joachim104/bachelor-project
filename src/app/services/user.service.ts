import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {

  nameTaken = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  baseUrl: string = 'https://api.bachelor.hololink.io';

  createUser(username: string) {
    return this.http
      .post<any>(`${this.baseUrl}/treasurehunt/sMKcreateUser`, {
        username: username,
      })
      .subscribe((resp) => {
        if (resp !== 'username already taken') {
          //console.log(resp);
          localStorage.setItem('userId', resp);
          this.router.navigateByUrl('/tutorial');
        } else {
          //console.log(resp);
          this.router.navigateByUrl('/signup');
          this.nameTaken.emit(true);
          //console.log('emitter', this.nameTaken);
        }
      });
  }

  getUser(id: string) {
    return this.http.get<any>(`${this.baseUrl}/treasurehunt/sMKgetUser/${id}`);
  }

  getTopTenUsers() {
    return this.http.get<any>(`${this.baseUrl}/treasurehunt/sMKgetTopTenUsers`);
  }

  updateTimeAndTotalScore(
    userId: string,
    timeTaken: number,
    totalPoints: number
  ) {
    return this.http
      .patch<any>(`${this.baseUrl}/treasurehunt/sMKupdateTimeAndTotalScore`, {
        userId: userId,
        timeTaken: timeTaken,
        totalPoints: totalPoints,
      })
      .subscribe((resp) => {
        console.log('resp: ', resp);
      });
  }
}
