import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { Meta } from '../../angular2-meta'

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'pool-tip',
    styleUrls: [ './pool-tip.component.css' ],
    templateUrl: './pool-tip.component.html',
})
export class PoolTipComponent {
    poolTips: any = [];
    selectedPoolTipID: any = null;

    constructor(public model: ModelService, private meta: Meta) {
        this.meta.setTitle("Pool Tips · Roseville Pool Service Inc - Serving Roseville, Rocklin, Granite Bay, CA");
        this.meta.updateMeta('description', "Roseville Pool Service Inc. offers top quality pool service in Roseville, Rocklin and Granite Bay. Call 916 791-1221");

        this.universalInit();
    }

    universalInit() {
        this.model.get('/assets/data/poolTips.json').subscribe(data => {
            this.poolTips = data.pooltips.pooltip;
        });
    }

    setSelectedPoolTip(poolTipID) {
        this.selectedPoolTipID = poolTipID;
    }

    isSelected(poolTipID) {
        return this.selectedPoolTipID == poolTipID;
    }
}
