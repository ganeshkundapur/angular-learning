import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isReset = false;

  constructor(private _router: Router) { }

  signIn(username, password) {
    let un = localStorage.getItem('username');
    let pw = localStorage.getItem('password');

    if (un === username && pw === password) {
      this._router.navigate(['']);
      this.isReset = true;
    } else {
      alert('please enter username and password correctly!!');
    }
  }

  signUp(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    console.log(username + '' + password);
    this.isReset = true;
  }

  doLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this._router.navigate(['/signIn']);
  }

}
