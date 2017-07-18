import { NgModule } from '@angular/core';
import { RouterModule, Router, NavigationEnd, Event } from '@angular/router';
import { ModelService } from './shared/model/model.service';
import { Meta } from '../angular2-meta'

export function getLazyModule() {
  return System.import('./+lazy/lazy.module' + (process.env.AOT ? '.ngfactory' : ''))
    .then(mod => mod[(process.env.AOT ? 'LazyModuleNgFactory' : 'LazyModule')]);
}

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'lazy', loadChildren: getLazyModule }
    ])
  ],
})
export class AppRoutingModule {
  meta_data: any = [];

  constructor(private router: Router, private model: ModelService, private meta: Meta) {
    this.universalInit();
  }

  universalInit() {
    this.model.get('/assets/data/meta.json').subscribe(data => {
        this.meta_data = data.routes;

        this.router.events.subscribe((event: Event ) => {
          if(event instanceof NavigationEnd) {
            let url:string = event.url.slice(1);
            let title:string = this.meta_data[url].title;
            let description:string = this.meta_data[url].description;

            this.meta.setTitle(title);
            this.meta.updateMeta('description', description);
          }
        });

    });
  }
}
