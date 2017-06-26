import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReviewComponent } from './review.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'reviews', component: ReviewComponent }
    ])
  ]
})
export class ReviewRoutingModule { }
