import { NgClass } from "@angular/common";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-startpage',
  templateUrl: 'planethunt-startpage.component.html'
})

export class PlanethuntStartpageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('logged baby!');
   }
}
