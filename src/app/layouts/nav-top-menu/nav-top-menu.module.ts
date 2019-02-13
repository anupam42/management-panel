import { NgModule } from '@angular/core';

import { NavTopMenuComponent } from './nav-top-menu.component';
import { MaterialModule } from './../../shared/modules/material.module';

@NgModule({
  declarations: [
    NavTopMenuComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    NavTopMenuComponent
  ]
})
export class NavTopModule { }
