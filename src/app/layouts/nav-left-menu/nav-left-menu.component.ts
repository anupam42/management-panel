import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { AuthService } from './../../shared/services/auth.service';
import { TranslateService } from 'src/app/shared/services/translate.service';

@Component({
  selector: 'app-nav-left-menu',
  templateUrl: './nav-left-menu.component.html',
  styleUrls: ['./nav-left-menu.component.scss']
})
export class NavLeftMenuComponent implements OnInit {

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
