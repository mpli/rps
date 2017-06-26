import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'commit',
    styleUrls: [ './commit.component.css' ],
    templateUrl: './commit.component.html',
})
export class CommitComponent {
    constructor() { }
}
