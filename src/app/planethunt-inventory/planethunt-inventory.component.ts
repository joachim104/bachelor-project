import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-inventory',
  templateUrl: 'planethunt-inventory.component.html',
})
export class PlanethuntInventoryComponent implements OnInit {
  planetArray: any[] = [];

  totalpoints: number = 0;

  username: any = '';

  baseUrl: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
    this.baseUrl = `https://viewer.bachelor.hololink.io/5fcdff656aaa6af4ba799606?username=${this.username}&planet=`;
    this.userService
      .getUser('5fd7948f288c8372b2745de9')
      .subscribe((response) => {
        this.planetArray = response.planets;
        this.calculatePointTotal();
      });
  }
  // TODO: When first hololink is opened, start timer
  // TODO: When a hololink is visited, update the image for that planet in the database

  // Scroll to specific HTML element on page
  scroll(id: any) {
    const elId = String(id);
    const el: any = document.getElementById(elId);
    el.scrollIntoView({ behavior: 'smooth' });
  }

  // Calculate the total points based on the points for each planet
  calculatePointTotal() {
    this.planetArray.forEach((planet) => {
      this.totalpoints = this.totalpoints + planet.points;
    });
  }
}
