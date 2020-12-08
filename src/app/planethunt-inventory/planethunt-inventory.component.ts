import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'planethunt-inventory',
  templateUrl: 'planethunt-inventory.component.html'
})

export class PlanethuntInventoryComponent implements OnInit {

  planetArray = [
    {
      name: 'Solen',
      points: 3,
      letter: 'a',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
    {
      name: 'Merkur',
      points: 2,
      letter: 'b',
      imgurl: '../../assets/images/placeholder-planet.jpg'
    },
  ]

  constructor() { }

  ngOnInit() { }
}
