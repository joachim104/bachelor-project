import { Component, OnInit } from '@angular/core';
import { Userdata } from '../userdata'

@Component({
  selector: 'planethunt-username-form',
  templateUrl: 'planethunt-username-form.component.html'
})

export class PlanethuntUsernameFormComponent implements OnInit {

  username: string = '';

  submitted = false;

  onSubmit() {
    console.log('username: ', this.username);
    const newUser = new Userdata(this.username, [
        {
          id: 1,
          name: 'Solen',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om solen',
			    visited: 0
        },
        {
          id: 2,
          name: 'Merkur',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om merkur',
			    visited: 0
        },
        {
          id: 3,
          name: 'Venus',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om venus',
			    visited: 0
        },
        {
          id: 4,
          name: 'Jorden',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om jorden',
			    visited: 0
        },
        {
          id: 5,
          name: 'Mars',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om mars',
			    visited: 0
        },
        {
          id: 6,
          name: 'Jupiter',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om jupiter',
			    visited: 0
        },
        {
          id: 7,
          name: 'Saturn',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om saturn',
			    visited: 0
        },
        {
          id: 8,
          name: 'Uranus',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om uranus',
			    visited: 0
        },
        {
          id: 9,
          name: 'Neptun',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om neptun',
			    visited: 0
        },
        {
          id: 10,
          name: 'Pluto',
			    points: 0,
			    letter: '?',
			    facts: 'Fakta om pluto',
			    visited: 0
        },
      ]);
    console.log('new userdata: ', newUser);
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() { }
}
