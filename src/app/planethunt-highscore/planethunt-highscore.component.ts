import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-highscore',
  templateUrl: 'planethunt-highscore.component.html',
})

export class PlanethuntHighscoreComponent implements OnInit {

  highScoreArray: any[] = [];
  currentUser: any;
  userId: any;
  isIphone: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    //this.checkOS();
    this.userId = localStorage.getItem('userId');
    this.userService.getUser(this.userId).subscribe((response) => {
      this.currentUser = response;
      console.log(this.currentUser);
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
        if (userArray[i]._id === user._id) {
            return true;
        }
    }
    return false;
  }


  // Turn timeTaken in seconds into hours:minutes:seconds
  convertSecondsToHMS(timeInSeconds: number) {
    return new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  }

  // create topTenArray with only relevant data
  createLimitedTopTenUsers(userArray: [any]) {
    if (!this.containsUser(this.currentUser, userArray)) {
      userArray.pop();
      userArray.push(this.currentUser);
    }
    var position = 1;
    userArray.forEach(user => {
      var tempUser = {
        username: "",
        totalPoints: 0,
        timeTaken: ""
      };
      tempUser.username = position.toString() + ". " + user.username;
      tempUser.totalPoints = user.totalPoints;
      var timeInSeconds = user.timeTaken;
      tempUser.timeTaken = this.convertSecondsToHMS(timeInSeconds);
      this.highScoreArray.push(tempUser);
      position = position + 1;
    });

  }

  checkOS() {
    this.isIphone = navigator.userAgent.indexOf('iPhone') != -1;
  }

}
