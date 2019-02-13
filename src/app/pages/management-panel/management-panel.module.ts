import { NgModule } from '@angular/core';

import { ManagementPanelComponent } from './management-panel.component';
import { ManagementPanelRoutingModule } from './management-panel-routing.module';
import { SharedModule } from './../../shared/modules/shared-component.module';

@NgModule({
  declarations: [
    ManagementPanelComponent
  ],
  imports: [
    SharedModule,
    ManagementPanelRoutingModule
  ],
  exports: [
    ManagementPanelComponent
  ]
})
export class ManagementPanelModule { }
