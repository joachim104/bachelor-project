import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-inventory',
  templateUrl: 'planethunt-inventory.component.html'
})

export class PlanethuntInventoryComponent implements OnInit {

  // The array below is inserted to fill out the template during initial setup
  planetArray = [
    {
      name: 'Solen',
      points: 3,
      letter: 'a',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 3,
      letter: 'a',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 3,
      letter: 'a',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 1,
      letter: '?',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 3,
      letter: 'r',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 2,
      letter: 'a',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 3,
      letter: 'm',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 3,
      letter: 'a',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 1,
      letter: 'a',
      Fakta: 'Solen er meget stor, større end du tror.',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Solen',
      points: 2,
      letter: 'a',
      Fakta: 'Solen er meget stor, større end du tror.',
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

  calculatePointTotal() {
    this.planetArray.forEach(planet => {
      this.totalpoints = this.totalpoints + planet.points;
    });
  }



}
