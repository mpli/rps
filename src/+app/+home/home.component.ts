import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Meta } from '../../angular2-meta'
// import { Title } from '@angular/platform-browser';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'home',
    styleUrls: [ './home.component.css' ],
    templateUrl: './home.component.html'
})
export class HomeComponent {
    // constructor(private titleService: Title ) {
    //     this.setTitle("Home");
    // }

    constructor(private meta: Meta) {
        // this.setTitle("Home");
        this.meta.setTitle("Home · Roseville Pool Service Inc - Serving Roseville, Rocklin, Granite Bay, CA");
        this.meta.updateMeta('description', "Roseville Pool Service Inc. offers top quality pool service in Roseville, Rocklin and Granite Bay. Call 916 791-1221");
    }
    // public setTitle( newTitle: string ) {
    //     this.titleService.setTitle( newTitle );
    // }
}
