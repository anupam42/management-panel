import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { AuthService } from './../../shared/services/auth.service';
import { TranslateService } from 'src/app/shared/services/translate.service';


@Component({
  selector: 'app-nav-top-menu',
  templateUrl: './nav-top-menu.component.html',
  styleUrls: ['./nav-top-menu.component.scss']
})
export class NavTopMenuComponent implements OnInit {

  public closeModalCenterSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) { }

  ngOnInit() { }

  public setLang(lang: string): void {
    this.translate.use(lang);
  }

  public exit(): void {
    this.authService.signOut();
  }
}
