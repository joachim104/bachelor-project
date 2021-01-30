import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-tutorial',
  templateUrl: 'planethunt-tutorial.component.html'
})

export class PlanetHuntTutorialComponent implements OnInit {

  position = 1;

  constructor() { }

  ngOnInit() { }

  clickLeft() {
    if (this.position > 1) {
      this.position = this.position - 1;
    }
    if (this.position !== 4) {
      document.getElementById('skip')!.textContent = 'skip tutorial';
    }
  }

  clickRight() {
    if (this.position < 4) {
      this.position = this.position + 1;
    }
    if (this.position === 4) {
      document.getElementById('skip')!.textContent = 'start your quest';
    }
  }
}
