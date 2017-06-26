import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { CommitModule } from './+commit/commit.module';
import { ServiceModule } from './+service/service.module';
import { ReviewModule } from './+review/review.module';
import { ContactModule } from './+contact/contact.module';
import { PoolTipModule } from './+pool-tip/pool-tip.module';
import { LinkModule } from './+link/link.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    HomeModule,
    CommitModule,
    ServiceModule,
    ReviewModule,
    ContactModule,
    PoolTipModule,
    LinkModule,
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
