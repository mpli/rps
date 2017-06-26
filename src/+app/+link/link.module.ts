import { NgModule } from '@angular/core';

import { LinkComponent } from './link.component';
import { LinkRoutingModule } from './link-routing.module';
import { ShowModule } from '../+show/show.module';

@NgModule({
  imports: [
    ShowModule,
    LinkRoutingModule
  ],
  declarations: [
    LinkComponent
  ]
})
export class LinkModule { }
