import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServiceComponent } from './service.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'weekly-services', component: ServiceComponent }
    ])
  ]
})
export class ServiceRoutingModule { }
