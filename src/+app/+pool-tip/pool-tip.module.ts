import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PoolTipComponent } from './pool-tip.component';
import { PoolTipRoutingModule } from './pool-tip-routing.module';
import { ShowModule } from '../+show/show.module';

@NgModule({
  imports: [
    SharedModule,
    ShowModule,
    PoolTipRoutingModule
  ],
  declarations: [
    PoolTipComponent
  ]
})
export class PoolTipModule { }
