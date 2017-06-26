import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ReviewComponent } from './review.component';
import { ReviewRoutingModule } from './review-routing.module';
import { ShowModule } from '../+show/show.module';

@NgModule({
  imports: [
    SharedModule,
    ShowModule,
    ReviewRoutingModule
  ],
  declarations: [
    ReviewComponent
  ]
})
export class ReviewModule { }
