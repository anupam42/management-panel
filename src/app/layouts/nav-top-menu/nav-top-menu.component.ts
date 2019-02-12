import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { Subject } from 'rxjs';
import { AuthService } from './../../shared/services/auth.service';
import { TranslateService } from 'src/app/shared/services/translate.service';


@Component({
  selector: 'app-nav-top-menu',
  templateUrl: './nav-top-menu.component.html',
  styleUrls: ['./nav-top-menu.component.scss']
})
export class NavTopMenuComponent implements OnInit {

  public homeRoute: boolean;
  public modalOpen = false;
  public closeModalCenterSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private translate: TranslateService
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        event.url === '/home' ? this.homeRoute = true : this.homeRoute = false;
      }
    });
  }

  ngOnInit() { }

  public setLang(lang: string): void {
    this.translate.use(lang);
  }

  public exit(): void {
    this.authService.signOut();
  }
}
