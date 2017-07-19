import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { MetaService } from '../shared/meta.service'

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'review',
    styleUrls: [ './review.component.css' ],
    templateUrl: './review.component.html',
})
export class ReviewComponent {
    reviews: any = [];
    selectedReviewID: any = null;

    constructor(public model: ModelService, private metaSrv: MetaService) {
        this.metaSrv.setRoute('reviews');

        this.universalInit();
    }

    universalInit() {
        this.model.get('/assets/data/reviews.json').subscribe(data => {
            this.reviews = data.reviews.review;
        });
    }

    setSelectedReview(reviewID) {
        this.selectedReviewID = reviewID;
    }

    isSelected(reviewID) {
        return this.selectedReviewID == reviewID;
    }
}
