import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-wordpuzzle',
  templateUrl: 'planethunt-wordpuzzle.component.html',
  styleUrls: [],
})

export class PlanethuntWordpuzzleComponent implements OnInit {

  lettersArray = ["a", "m", "r", "c", "u", "r", "i", "i", "e", "e"];

  constructor() { }

  ngOnInit() {
    console.log(this.lettersArray);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lettersArray, event.previousIndex, event.currentIndex);
  }

}
