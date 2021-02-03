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
  }

  ngOnInit() {}

  onSubmit() {
    this.userService.createUser(this.username);
  }
}
