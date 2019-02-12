import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public userAuthenticated: boolean;

  constructor(
    private authService: AuthService
  ) { }

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
