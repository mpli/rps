import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'contact',
    styleUrls: [ './contact.component.css' ],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    constructor() { }
}
