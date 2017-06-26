import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';

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

    constructor(public model: ModelService) {
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
