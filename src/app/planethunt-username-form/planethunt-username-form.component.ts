import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'planethunt-username-form',
  templateUrl: 'planethunt-username-form.component.html',
})
export class PlanethuntUsernameFormComponent implements OnInit {
  username: string = '';

  submitted = false;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  onSubmit() {
    // let user knows that username already exist if createUser returns false
    // add ngOnDestroy and unsubscribe to observable
    this.userService.createUser(this.username);
    this.submitted = true;
    window.localStorage.setItem('planetsVisited', '0');
  }
}
