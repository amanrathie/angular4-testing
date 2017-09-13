import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import {AuthService} from './auth/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public location: Location, public router: Router, public auth: AuthService) {
      auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.location.path() =='' || this.location.path() == '/home') {
      this.router.navigate(['/home/dashboard']);
    }
  }

}
