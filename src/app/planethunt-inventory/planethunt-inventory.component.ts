import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-inventory',
  templateUrl: 'planethunt-inventory.component.html'
})

export class PlanethuntInventoryComponent implements OnInit {

  // The array below is inserted to fill out the template during initial setup
  planetArray = [
    {
      id: 1,
      name: 'Solen',
      points: 3,
      letter: 'a',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 2,
      name: 'Solen',
      points: 3,
      letter: 'a',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 3,
      name: 'Solen',
      points: 3,
      letter: 'a',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 4,
      name: 'Solen',
      points: 1,
      letter: '?',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 5,
      name: 'Solen',
      points: 3,
      letter: 'r',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 6,
      name: 'Solen',
      points: 2,
      letter: 'a',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 7,
      name: 'Solen',
      points: 3,
      letter: 'm',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 8,
      name: 'Solen',
      points: 3,
      letter: 'a',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 9,
      name: 'Solen',
      points: 1,
      letter: 'a',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      id: 10,
      name: 'Solen',
      points: 2,
      letter: 'a',
      fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
  ]

  totalpoints: number = 0;

  constructor() { }

  ngOnInit() {
    this.calculatePointTotal();
  }

  // TODO: get planets from database to populate the planetArray. OBS! Initiate all planets with a letter value of ? (question mark)

  // TODO: When first hololink is opened, start timer

  // TODO: When a hololink is visited, update the image for that planet in the database

  // Scroll to specific HTML element on page
  scroll(id: number) {
    const elId = String(id);
    const el: any = document.getElementById(elId);
    el.scrollIntoView({behavior: "smooth"});
  }

  // Calculate the total points based on the points for each planet
  calculatePointTotal() {
    this.planetArray.forEach(planet => {
      this.totalpoints = this.totalpoints + planet.points;
    });
  }



}
