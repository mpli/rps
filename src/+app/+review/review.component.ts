import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

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
    @ViewChild('scrollElement') el: ElementRef;

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
        if( this.selectedReviewID == reviewID) {
            this.selectedReviewID = -1;
            return;
        }
        
        this.selectedReviewID = reviewID;
        setTimeout(() => this.el.nativeElement.scrollIntoView({behavior: "smooth", block: "start"}), 100);
    }

    isSelected(reviewID) {
        return this.selectedReviewID == reviewID;
    }
}
