
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { SharedModule } from './../../shared/modules/shared-component.module';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [ ]
})
export class LoginModule { }
