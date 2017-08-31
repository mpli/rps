import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { MetaService } from '../shared/meta.service'

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
    @ViewChild('scrollElement') el: ElementRef;

    constructor(public model: ModelService, private metaSrv: MetaService) {
        this.metaSrv.setRoute('weekly-services');

        this.universalInit();
    }

    universalInit() {
        this.model.get('/assets/data/services.json').subscribe(data => {
            this.services = data.services.service;
        });
    }

    setSelectedService(serviceID) {
        if( this.selectedServiceID == serviceID) {
            this.selectedServiceID = -1;
            return;
        }
        
        this.selectedServiceID = serviceID;
        setTimeout(() => this.el.nativeElement.scrollIntoView({behavior: "smooth", block: "start"}), 100);
    }

    isSelected(serviceID) {
        return this.selectedServiceID == serviceID;
    }

    focusElement(e) {
        if (e.getAttribute('aria-expanded') != 'true') {
            setTimeout(() => e.scrollIntoView({behavior: "smooth", block: "start"}), 400);
        }
    }
}
