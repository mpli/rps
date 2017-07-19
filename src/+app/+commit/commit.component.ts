import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MetaService } from '../shared/meta.service'

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'commit',
    styleUrls: [ './commit.component.css' ],
    templateUrl: './commit.component.html',
})
export class CommitComponent {
    constructor(private metaSrv: MetaService) {
        this.metaSrv.setRoute('commit');
    }
}
