import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommitComponent } from './commit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'commit', component: CommitComponent }
    ])
  ]
})
export class CommitRoutingModule { }
