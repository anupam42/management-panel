import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavLeftMenuComponent } from './nav-left-menu.component';
import { MaterialModule } from './../../shared/modules/material.module';

@NgModule({
  declarations: [
    NavLeftMenuComponent
  ],
  imports: [
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavLeftMenuComponent
  ]
})
export class NavLeftModule { }
