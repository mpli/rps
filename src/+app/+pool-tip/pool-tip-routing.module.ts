import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PoolTipComponent } from './pool-tip.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'pool-tips', component: PoolTipComponent }
    ])
  ]
})
export class PoolTipRoutingModule { }