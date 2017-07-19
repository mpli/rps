import { Injectable } from '@angular/core';
import { Meta } from '../../angular2-meta'

const meta_data = require('../../assets/data/meta.json')


@Injectable()
export class MetaService {
  constructor(private meta: Meta) { }

  setRoute(url:string) {
    let title:string = meta_data.routes[url].title;
    let description:string = meta_data.routes[url].description;
    let keywords:string = meta_data.routes[url].keywords;

    this.meta.setTitle(title);
    this.meta.updateMeta('description', description);
    this.meta.updateMeta('keywords', keywords);
  }
}
