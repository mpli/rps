import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'index.html', component: HomeComponent }
    ])
  ]
})
export class HomeRoutingModule { }
