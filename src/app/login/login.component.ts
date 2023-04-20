import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  uname = '';
  passwd = '';
  fail = '';

  check(): void {
    if ((this.uname == 'godspeed') && (this.passwd == 'godspeed')) {
      this.router.navigate(['./law/details-add'])
    } else {
      this.fail = 'Incorrect Username or Password!'
    }
  }
}
