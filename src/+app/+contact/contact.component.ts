import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
    changeDetection: ChangeDetectionStrategy.Default,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'contact',
    styleUrls: [ './contact.component.css' ],
    templateUrl: './contact.component.html'
})
export class ContactComponent {

    status: number = 0;

    constructor(public http: Http) { }

    onSubmit(value: any) {
        let params = JSON.stringify(value);
        let headers = new Headers({"Content-Type": "application/json"});
        let options = new RequestOptions({headers: headers});
        this.http.post("http://rosevillepoolservice.net/action.php", params, options).subscribe(res => {
            console.log(res.text());
            if(JSON.parse(res.text()).success) {
                this.status = 1;
            } else {
                this.status = -1;
            };
        });
    }
}
