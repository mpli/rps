import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { Meta } from '../../angular2-meta'

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'service',
    styleUrls: [ './service.component.css' ],
    templateUrl: './service.component.html',
})
export class ServiceComponent {
    services: any = [];
    selectedServiceID: any = null;

    constructor(public model: ModelService, private meta: Meta) {
        this.meta.setTitle("Weekly Services · Roseville Pool Service Inc - Serving Roseville, Rocklin, Granite Bay, CA");
        this.meta.updateMeta('description', "Roseville Pool Service Inc. offers top quality pool service in Roseville, Rocklin and Granite Bay. Call 916 791-1221");

        this.universalInit();
    }

    universalInit() {
        this.model.get('/assets/data/services.json').subscribe(data => {
            this.services = data.services.service;
        });
    }

    setSelectedService(serviceID) {
        this.selectedServiceID = serviceID;
    }

    isSelected(serviceID) {
        return this.selectedServiceID == serviceID;
    }
}
