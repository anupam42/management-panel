import { NgModule } from '@angular/core';

import { NavTopMenuComponent } from './nav-top-menu.component';
import { SharedModule } from './../../shared/modules/shared-component.module';

@NgModule({
  declarations: [
    NavTopMenuComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavTopMenuComponent
  ]
})
export class NavModule { }
