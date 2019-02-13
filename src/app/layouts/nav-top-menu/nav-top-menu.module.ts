import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavTopMenuComponent } from './nav-top-menu.component';
import { MaterialModule } from './../../shared/modules/material.module';

@NgModule({
  declarations: [
    NavTopMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavTopMenuComponent
  ]
})
export class NavTopModule { }
