import { Injectable } from '@angular/core';
import { ModelService } from '../shared/model/model.service';
import { Meta } from '../../angular2-meta'


@Injectable()
export class MetaService {
  meta_data: any = [];
  loaded:boolean = false;

  constructor(private model: ModelService, private meta: Meta) {
    this.universalInit();
  }

  setRoute(url:string) {
    while(!this.loaded);

    let title:string = this.meta_data[url].title;
    let description:string = this.meta_data[url].description;

    this.meta.setTitle(title);
    this.meta.updateMeta('description', description);
  }

  universalInit() {
    this.model.get('/assets/data/meta.json').subscribe(data => {
        this.meta_data = data.routes;
        this.loaded = true;
    });
  }
}
