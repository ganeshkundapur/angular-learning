import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, DoCheck {
  hide = true;
  @Input() state;
  currentState: any;
  constructor(private router: Router,
              private _userService: UserService) { }

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
   console.log(this.userForm.value);
   let username = this.userForm.get('username').value;
   let password = this.userForm.get('password').value;
   if (this.currentState === 'signin') {
     this._userService.signIn(username, password);
   } else {
     this._userService.signUp(username, password);
   }
  }


  reset() {
    this.userForm.reset();
  }

  ngDoCheck() {
    if(this._userService.isReset) {
      this.userForm.reset();
      this._userService.isReset = false;
      return this._userService.isReset;
    }
  }

  ngOnInit() {
    console.log(this.state);
    this.currentState = this.state;
  }

}
