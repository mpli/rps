import { NgModule } from '@angular/core';

import { CommitComponent } from './commit.component';
import { CommitRoutingModule } from './commit-routing.module';
import { ShowModule } from '../+show/show.module';

@NgModule({
  imports: [
    ShowModule,
    CommitRoutingModule
  ],
  declarations: [
    CommitComponent
  ]
})
export class CommitModule { }
