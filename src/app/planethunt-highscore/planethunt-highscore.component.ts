import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-highscore',
  templateUrl: 'planethunt-highscore.component.html'
})

export class PlanethuntHighscoreComponent implements OnInit {

  highScoreArray: any[] = [];
  currentUser: any;
  userId: any;
  baseUrl: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    // this.baseUrl = `https://viewer.bachelor.hololink.io/5fcdff656aaa6af4ba799606?userId=${this.userId}&planet=`;
    // THIS IS ONLY FOR DEVELOPMENT - CHANGE TO ABOVE WHEN DEPLOYING
    // this.baseUrl = `https://10.25.142.129:8080/5fcdff656aaa6af4ba799606?userId=${this.userId}&planet=`;
    this.baseUrl = `https://10.25.142.129:8080/5fdb58c05c5f98b6cbf06d4b?userId=${this.userId}&planet=`;
    this.userService.getUser(this.userId).subscribe((response) => {
      this.currentUser = response;
    });
    this.userService
      .getTopTenUsers()
      .subscribe((response) => {
        this.createLimitedTopTenUsers(response);
      });
  }

  // check if user is in array
  containsUser(user: any, userArray: [any]) {
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i] === user) {
            return true;
        }
    }
    return false;
}


  // TODO: Turn timeTaken in seconds into hours:minutes:seconds
  convertSecondsToHMS(timeInSeconds: number) {
    return new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  }

  // create topTenArray with only relevant data
  createLimitedTopTenUsers(userArray: [any]) {
    // TODO: finish this to substitute number ten for currentUser if currentUser is not in array
    this.containsUser(this.currentUser, userArray);

    userArray.forEach(user => {
      var tempUser = {
        username: "",
        totalPoints: 0,
        timeTaken: ""
      };
      tempUser.username = user.username;
      tempUser.totalPoints = user.totalPoints;
      var timeInSeconds = user.timeTaken;
      tempUser.timeTaken = this.convertSecondsToHMS(timeInSeconds);
      this.highScoreArray.push(tempUser);
    });
  }

}
