import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'show',
  styleUrls: [ './show.component.css' ],
  templateUrl: './show.component.html'
})
export class ShowComponent { }
