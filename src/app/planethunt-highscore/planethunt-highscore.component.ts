import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-highscore',
  templateUrl: 'planethunt-highscore.component.html'
})

export class PlanethuntHighscoreComponent implements OnInit {

  hiScorePlaceholder = [
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    },
    {
      name : "Marsmanden",
      points : 30,
      time : "00:12:01"
    }
  ]

  highScoreArray: any[] = [];


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
      .getTopTenUsers()
      .subscribe((response) => {
        this.highScoreArray = response;
        console.log(this.highScoreArray);
      });
  }

  // TODO: Get current user. Check if current user is in top ten. If so, do nothing, otherwise
  // substitute tenth position with current user, but show their position as their actual position
  // not as number ten
}
