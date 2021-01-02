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
    // localStorage.setItem('userId', '5fe1f549b996bc056d8b9b2f');
    this.userId = localStorage.getItem('userId');
    // this.baseUrl = `https://viewer.bachelor.hololink.io/5fed9833debc6c433fc6281a?userId=${this.userId}&planet=`;
    this.baseUrl = `https://viewer.bachelor.hololink.io/`;
    // THIS IS ONLY FOR DEVELOPMENT - CHANGE TO ABOVE WHEN DEPLOYING
    // this.baseUrl = `https://10.25.142.129:8080/5fcdff656aaa6af4ba799606?userId=${this.userId}&planet=`;
    // this.baseUrl = `https://192.168.0.108:8080/5fdb58c05c5f98b6cbf06d4b?userId=${this.userId}&planet=`;
    this.userService.getUser(this.userId).subscribe((response) => {
      this.planetArray = response.planets;
      this.checkNumberOfPlanetsVisitedAndCalulatePoints();
      this.username = response.username;
      // Check if planetsVisited is larger than zero.
      // if planetsVisited > 0, get timeStarted and current time. Subtract timeStarted from current time
      // to get total elapsed time.
      if (this.planetsVisited > 0) {
        var currentTime = new Date().getTime() / 1000;
        this.timeStarted = window.localStorage.getItem('timeStarted');
        this.timeElapsed = currentTime - this.timeStarted;
        if (this.planetsVisited === 10) {
          console.log('more than ten planets visited');
          // if planetsVisited > 10, subtract timeStarted from current time and save the result to user on mongoDB atlas
          // as timeTaken
          this.timeToDisplay = new Date(this.timeElapsed * 1000)
            .toISOString()
            .substr(11, 8);
          this.finishTime = true;
          console.log('final time: ', this.timeElapsed);
          console.log('total points: ', this.totalpoints);
          this.userService.updateTimeAndTotalScore(
            this.userId,
            this.timeElapsed,
            this.totalpoints
          );
        } else {
          console.log('less than ten planets visited');
          // Otherwise, set timer to run from the current time point.
          this.startTime(this.timeElapsed);
        }
      } else {
        console.log('ZERO planets visited');
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

  // When following a planet's Hololink, check if this is the first planet to be visited
  // If so, set timestamp in localstorage
  visitPlanet() {
    if (this.planetsVisited === 0) {
      this.startTime(0);
    }
  }

  // set the timer being displayed, incrementing every second in real time
  startTime(seconds: number) {
    this.interval = setInterval(() => {
      seconds++;
      this.timeToDisplay = new Date(seconds * 1000).toISOString().substr(11, 8);
    }, 1000);
  }

  checkNumberOfPlanetsVisitedAndCalulatePoints() {
    var tempNumVisited = 0;
    this.planetArray.forEach((planet) => {
      if (planet.visited === true) {
        console.log(planet.visited);
        tempNumVisited = tempNumVisited + 1;
      }
      this.totalpoints = this.totalpoints + planet.points;
    });
    console.log(tempNumVisited);
    this.planetsVisited = tempNumVisited;
  }
}

// dynamic button for wordpuzzle after ten planets are found
