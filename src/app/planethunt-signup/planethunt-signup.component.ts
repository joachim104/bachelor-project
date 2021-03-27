import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-signup',
  templateUrl: 'planethunt-signup.component.html'
})

export class PlanethuntSignupComponent implements OnInit {

  possibleWordsArray = ["albus", "dobby", "black", "draco", "snape", "ginny", "argus", "filch",
                        "fudge", "lupin", "tonks", "moody", "fleur", "percy", "chang", "goyle", "barty"];

  constructor() { }

  ngOnInit() {
    this.chooseWord();
  }

  chooseWord() {
    // get array length
    const numberOfWords = this.possibleWordsArray.length;
    // randomize number in array. Subtract one for zero-indexing
    const wordPositionInArray = Math.ceil(Math.random() * numberOfWords) - 1;
    // store word in localstorage
    localStorage.setItem('puzzleWord', this.possibleWordsArray[wordPositionInArray]);
  }

}
