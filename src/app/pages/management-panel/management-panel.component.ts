import { Component, OnInit } from '@angular/core';

import { TranslateService } from 'src/app/shared/services/translate.service';

@Component({
  selector: 'app-management-panel',
  templateUrl: './management-panel.component.html',
  styleUrls: ['./management-panel.component.scss']
})
export class ManagementPanelComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
