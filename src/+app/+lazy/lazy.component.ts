import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'lazy',
  template: `
    <h3>
      Lazy component
    </h3>
    <p>
      Content in this component is downloaded when needed.
      We can use this feature to improve performance in aspect of initial loading.
    </p>
    <p>
      Have you seen lazy loaded image in some apps such as medium.com, google image search, mac-torrents.com? <br/>
      Same principle as in lazy image loading can be applied to modules of app.
    </p>
  `
})
export class LazyComponent {
}
