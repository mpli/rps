import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

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

    constructor() {
        // this.setTitle("Home");
    }
    // public setTitle( newTitle: string ) {
    //     this.titleService.setTitle( newTitle );
    // }
}
