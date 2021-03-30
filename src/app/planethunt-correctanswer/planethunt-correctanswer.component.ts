import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-correctanswer',
  templateUrl: 'planethunt-correctanswer.component.html'
})

export class PlanethuntCorrectanswerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.localStorage.setItem('spruthuset', 'visited');
  }

}
