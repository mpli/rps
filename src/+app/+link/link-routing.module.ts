import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LinkComponent } from './link.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'links', component: LinkComponent }
    ])
  ]
})
export class LinkRoutingModule { }
