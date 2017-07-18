import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { ModelService } from '../shared/model/model.service';
import { Meta } from '../../angular2-meta'

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

    constructor(public model: ModelService, private meta: Meta) {
        this.meta.setTitle("Reviews · Roseville Pool Service Inc - Serving Roseville, Rocklin, Granite Bay, CA");
        this.meta.updateMeta('description', "Roseville Pool Service Inc. offers top quality pool service in Roseville, Rocklin and Granite Bay. Call 916 791-1221");

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
