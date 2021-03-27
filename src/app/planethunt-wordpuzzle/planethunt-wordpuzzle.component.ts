import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-wordpuzzle',
  templateUrl: 'planethunt-wordpuzzle.component.html',
  styleUrls: [],
})

export class PlanethuntWordpuzzleComponent implements OnInit {

  lettersArray: string[] = [];
  correctArray: string[] = [];
  correctanswer = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // håndter det ordentligt og tjek hvis der er noget i det. Service...
    const tempArray = window.localStorage.getItem('puzzleWord')?.split('');
    // parse JSON i stedet for at splitte string
    const tempShuffledArray = window.localStorage.getItem('shuffledWord')?.split('');
    this.correctArray = tempArray!;
    this.lettersArray = tempShuffledArray!;
    console.log('cla: ', this.correctArray);
    console.log('la: ', this.lettersArray);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.lettersArray, event.previousIndex, event.currentIndex);
    if (this.compareArrays(this.lettersArray, this.correctArray)) {
      document.getElementById("wordpuzzle")!.style.backgroundImage = "url('https://res.cloudinary.com/hololink-io/image/upload/v1611315812/brorfelde%20-%20PlanetHunt/brorfelde-landscape_slpi6b.jpg')";
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
