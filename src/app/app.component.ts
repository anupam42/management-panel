import { Component } from '@angular/core';

import { TranslateService } from './shared/services/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) { }

  public setLang(lang: string): void {
    this.translate.use(lang);
  }

}
