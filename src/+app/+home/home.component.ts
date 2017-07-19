import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MetaService } from '../shared/meta.service'

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'home',
    styleUrls: [ './home.component.css' ],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(private metaSrv: MetaService) {
        this.metaSrv.setRoute('home');
    }
}
