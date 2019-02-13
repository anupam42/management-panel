import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public homeRoute: boolean;
  public userAuthenticated: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        event.url === '/home' ? this.homeRoute = true : this.homeRoute = false;
      }
    });
  }

  ngOnInit() {
    this.verifyUserAuthenticated();
  }

  private verifyUserAuthenticated(): void {
    this.authService.verifyAuthUser.subscribe(userAuthenticated => {
      console.log('userAuthenticated', userAuthenticated);
      this.userAuthenticated = userAuthenticated;
    });
  }

}
