import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-username-form',
  templateUrl: 'planethunt-username-form.component.html',
})
export class PlanethuntUsernameFormComponent implements OnInit {

  username: string = '';

  nameTaken: boolean = false;

  submitted = false;

  constructor(private userService: UserService) {
    this.userService.nameTaken.subscribe((flag: boolean) => this.nameTaken = flag);
    console.log('ghete', this.nameTaken);
  }

  ngOnInit() {
    console.log('nameTaken: ', this.nameTaken);
    if (this.nameTaken) {

    }
  }

  onSubmit() {
    this.userService.createUser(this.username);
  }
}
