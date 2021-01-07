import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-inventory',
  templateUrl: 'planethunt-inventory.component.html',
})
export class PlanethuntInventoryComponent implements OnInit {
  planetArray: any[] = [];

  totalpoints: number = 0;
  timeStarted: any;
  currentTime: any;
  timeElapsed: any;
  timeInSeconds: number = 0;
  timeToDisplay: any;
  interval: any;
  planetsVisited: number = 0;
  finishTime: boolean = false;

  userId: any = '';

  username: string = '';

  baseUrl: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userId = window.localStorage.getItem('userId');
    this.baseUrl = `https://viewer.bachelor.hololink.io/`;
    this.userService.getUser(this.userId).subscribe((response) => {
      this.planetArray = response.planets;
      this.checkNumberOfPlanetsVisitedAndCalculatePoints();
      this.username = response.username;
      // Check if planetsVisited is larger than zero.
      // if planetsVisited > 0, get timeStarted and current time. Subtract timeStarted from current time
      // to get total elapsed time.
      if (this.planetsVisited > 0) {
        var currentTime = new Date().getTime() / 1000;
        this.timeStarted = window.localStorage.getItem('timeStarted');
        this.timeElapsed = currentTime - this.timeStarted;
        this.startTime(this.timeElapsed);
        if (this.planetsVisited === 10) {
          // if planetsVisited equals 10, subtract timeStarted from current time and save the result to user on mongoDB atlas
          // as timeTaken
          this.timeToDisplay = new Date(this.timeElapsed * 1000)
            .toISOString()
            .substr(11, 8);
          this.finishTime = true;
          this.userService.updateTimeAndTotalScore(
            this.userId,
            this.timeElapsed,
            this.totalpoints
          );
        }
      } else {
        // if planetsVisited === 0, set timer to zero, without counting
        this.timeStarted = new Date().getTime() / 1000;
        window.localStorage.setItem('timeStarted', this.timeStarted);
        this.timeToDisplay = new Date(0).toISOString().substr(11, 8);
      }
    });
  }

  // Scroll to specific HTML element on page
  scroll(id: any) {
    const elId = String(id);
    const el: any = document.getElementById(elId);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  // Set the timer being displayed, incrementing every second in real time
  startTime(seconds: number) {
    this.interval = setInterval(() => {
      seconds++;
      this.timeToDisplay = new Date(seconds * 1000).toISOString().substr(11, 8);
    }, 1000);
  }

  // Check the number of planets visited and calculate the total number of points. Set values to be sent to db
  // if all planets are visited
  checkNumberOfPlanetsVisitedAndCalculatePoints() {
    var tempNumVisited = 0;
    this.planetArray.forEach((planet) => {
      if (planet.visited === true) {
        tempNumVisited = tempNumVisited + 1;
      }
      this.totalpoints = this.totalpoints + planet.points;
    });
    this.planetsVisited = tempNumVisited;
  }
}

// dynamic button for wordpuzzle after ten planets are found
