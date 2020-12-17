import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-inventory',
  templateUrl: 'planethunt-inventory.component.html',
})
export class PlanethuntInventoryComponent implements OnInit {
  planetArray: any[] = [];

  totalpoints: number = 0;

  userId: any = '';

  username: string = '';

  baseUrl: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    // this.baseUrl = `https://viewer.bachelor.hololink.io/5fcdff656aaa6af4ba799606?userId=${this.userId}&planet=`;
    // THIS IS ONLY FOR DEVELOPMENT - CHANGE TO ABOVE WHEN DEPLOYING
    this.baseUrl = `https://10.25.142.129:8080/5fcdff656aaa6af4ba799606?userId=${this.userId}&planet=`;
    this.userService.getUser(this.userId).subscribe((response) => {
      this.planetArray = response.planets;
      this.username = response.username;
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
