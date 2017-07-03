import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ShowModule } from '../+show/show.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ShowModule,
    SharedModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
