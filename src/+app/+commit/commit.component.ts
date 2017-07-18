import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Meta } from '../../angular2-meta'

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'commit',
    styleUrls: [ './commit.component.css' ],
    templateUrl: './commit.component.html',
})
export class CommitComponent {
    constructor(private meta: Meta) {
        this.meta.setTitle("Commitment · Roseville Pool Service Inc - Serving Roseville, Rocklin, Granite Bay, CA");
        this.meta.updateMeta('description', "Roseville Pool Service Inc. offers top quality pool service in Roseville, Rocklin and Granite Bay. Call 916 791-1221");
    }
}
