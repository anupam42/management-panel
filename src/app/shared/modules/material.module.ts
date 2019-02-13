import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
})
export class MaterialModule { }
