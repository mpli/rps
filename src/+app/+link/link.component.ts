import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MetaService } from '../shared/meta.service'

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'links',
    styleUrls: [ './link.component.css' ],
    templateUrl: './link.component.html'
})
export class LinkComponent {
    constructor(private metaSrv: MetaService) {
        this.metaSrv.setRoute('links');
    }
}
