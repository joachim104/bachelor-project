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
      document.getElementById('skip')!.textContent = 'skip vejledning';
    }
    //this.scroll(this.position);
  }

  clickRight() {
    if (this.position < 4) {
      this.position = this.position + 1;
    }
    if (this.position === 4) {
      document.getElementById('skip')!.textContent = 'start planetjagten';
    }
    //this.scroll(this.position);
  }

  // Scroll to specific HTML element on page
  /*scroll(id: number) {
    const elId = String(id);
    const el: any = document.getElementById(elId);
    el.scrollIntoView({behavior: "smooth"});
  }*/

}
