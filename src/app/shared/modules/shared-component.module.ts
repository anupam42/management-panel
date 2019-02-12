import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { TranslatePipe } from './../pipes/translate.pipe';
import { TranslateService } from '../services/translate.service';

export function setupTranslateFactory(service: TranslateService): Function {
  return () => service.use('pt-br');
}

@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    TranslatePipe
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ]
})
export class SharedModule { }
