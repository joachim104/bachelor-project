import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-wordpuzzle',
  templateUrl: 'planethunt-wordpuzzle.component.html',
  styleUrls: [],
})

export class PlanethuntWordpuzzleComponent implements OnInit {

  lettersArray = ["p", "s", "t", "e", "h", "ru", "s", "t", "u"];
  correctArray = ["s", "p", "ru", "t", "h", "u", "s", "e", "t"];
  correctanswer = false;

  constructor() { }

  ngOnInit() {
    console.log(this.lettersArray);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lettersArray, event.previousIndex, event.currentIndex);
    if (this.compareArrays(this.lettersArray, this.correctArray)) {
      document.getElementById("wordpuzzle")!.style.backgroundImage = "url('https://res.cloudinary.com/hololink-io/image/upload/v1616927402/SMK-tests/tumbafoto_nrv93s.png')";
      this.correctanswer = true;
    }
  }

  compareArrays(array1: string[], array2: string[]) {
    if (array1.length === array2.length && array1.every(function(value, index) {
      return value === array2[index]
    })) {
      return true;
    } else {
      return false;
    }
  }

  onSubmitClicked() {
    if (this.compareArrays(this.lettersArray, this.correctArray)) {
      console.log('YES!');
    } else {
      console.log('NO!');
    }
  }

}
