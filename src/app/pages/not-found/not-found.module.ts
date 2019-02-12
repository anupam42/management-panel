import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found.component';
import { SharedModule } from 'src/app/shared/modules/shared-component.module';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    SharedModule
  ]
})
export class NotFoundModule { }
