import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'links',
    styleUrls: [ './link.component.css' ],
    templateUrl: './link.component.html'
})
export class LinkComponent {
    constructor() { }
}
