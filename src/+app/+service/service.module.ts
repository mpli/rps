import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ServiceComponent } from './service.component';
import { ServiceRoutingModule } from './service-routing.module';
import { ShowModule } from '../+show/show.module';

@NgModule({
  imports: [
    SharedModule,
    ShowModule,
    ServiceRoutingModule
  ],
  declarations: [
    ServiceComponent
  ]
})
export class ServiceModule { }
