import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';
import { AuthService } from './../../shared/services/auth.service';
import { TranslateService } from 'src/app/shared/services/translate.service';
import { EconomicGroup } from './../../shared/models/economic-group';

@Component({
  selector: 'app-nav-top-menu',
  templateUrl: './nav-top-menu.component.html',
  styleUrls: ['./nav-top-menu.component.scss']
})
export class NavTopMenuComponent implements OnInit {

  public notifications: number;
  public economicGroups: EconomicGroup[];

  public closeModalCenterSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private authService: AuthService,
    private translate: TranslateService
  ) {
    this.notifications = 4;
    this.economicGroups = [
      { id: '1', name: 'Visão Agregada 1' },
      { id: '2', name: 'Visão Agregada 2' },
      { id: '3', name: 'Visão Agregada 3' }
    ];
  }

  ngOnInit() { }

  public setLang(lang: string): void {
    this.translate.use(lang);
  }

  public openMenuOptions() {
    // TODO: create menu options
    // TODO: remove
    this.exit();
  }

  public exit(): void {
    this.authService.signOut();
  }
}
