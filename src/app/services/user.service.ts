import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {

  nameTaken = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  baseUrl: string = 'https://api.quest.hololink.io';
  //baseUrl: string = 'http://localhost:4041';

  createUser(username: string) {
    return this.http
      .post<any>(`${this.baseUrl}/treasurehunt/createDarioUser`, {
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
    return this.http.get<any>(`${this.baseUrl}/treasurehunt/getDarioUser/${id}`);
  }

  getTopTenUsers() {
    return this.http.get<any>(`${this.baseUrl}/treasurehunt/getTopTenDarioUsers`);
  }

  updateTimeAndTotalScore(
    userId: string,
    timeTaken: number,
    totalPoints: number
  ) {
    return this.http
      .patch<any>(`${this.baseUrl}/treasurehunt/updateDarioTimeAndTotalScore`, {
        userId: userId,
        timeTaken: timeTaken,
        totalPoints: totalPoints,
      })
      .subscribe((resp) => {
        console.log('resp: ', resp);
      });
  }
}
