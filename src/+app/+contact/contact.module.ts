import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ShowModule } from '../+show/show.module';

@NgModule({
  imports: [
    ShowModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule { }
