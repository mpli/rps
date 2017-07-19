import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { MetaService } from '../shared/meta.service'

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

    constructor(public model: ModelService, private metaSrv: MetaService) {
        this.metaSrv.setRoute('pool-tips');

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
