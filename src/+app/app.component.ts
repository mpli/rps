import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  styles: [`
    * { padding:0; margin:0; font-family: 'Droid Sans', sans-serif; }
    #universal { text-align:center; font-weight:bold; padding:15px 0; }
    nav { background:rgb(86, 185, 214); min-height:40px; }
    nav a { font-weight:bold; text-decoration:none; color:#fff; padding:20px; display:inline-block; transition:0.3s; }
    nav a:hover { background:rgb(119, 205, 231); }
    .hero-universal { min-height:500px; display:block; padding:20px; }
    .inner-hero { background:rgba(255, 255, 255, 0.75); border:5px #ccc solid; padding:25px; }
    .router-link-active { background-color: rgb(119, 205, 231); }
    main { padding:20px 0; }
    pre { font-size:12px; }
    .footer-navbar-wrapper { background-color:rgb(86, 185, 214); color:white; padding:36px 5%; position:absolute; left:0; bottom:0; right:0; }
    .centered { margin:0 auto; }
  `],
  template: `
  <img itemprop="image" src="../assets/image/roseville_pool_service_logo5.png" alt="Roseville Pool Service">
  <nav>
    <a routerLinkActive="router-link-active" routerLink="home">Home</a>
    <a routerLinkActive="router-link-active" routerLink="commit">Commitment</a>
    <a routerLinkActive="router-link-active" routerLink="weekly-services">Weekly Services</a>
    <a routerLinkActive="router-link-active" routerLink="reviews">Reviews</a>
    <a routerLinkActive="router-link-active" routerLink="contact-us">Contact Us</a>
    <a routerLinkActive="router-link-active" routerLink="pool-tips">Pool Tips</a>
    <a routerLinkActive="router-link-active" routerLink="links">Links</a>
  </nav>
  <div class="hero-universal">
      <main>
        <router-outlet></router-outlet>
      </main>
  </div>

  <footer class="footer-navbar-wrapper" id="footer">
    <div class="container centered text-center">
        <h4> Thank you for stopping by to learn about us! We're here to serve you! </h4>
        <br>
        <br>
        <div class="row">
          <div class="col-md-12">
              <div class="row">
                  <div class="col-md-6">
                    <p> Roseville Pool Service </p>
                    <p> Owned and operated by Marian Pliczka and son Tom Pliczka </p>
                    <p> Members of IPSSA (Independent Pool and SPA Service Association) </p>
                  </div>
                  <div class="col-md-6">
                    <p> 1003 Topaz Ct., </p>
                    <p> Roseville, CA 95661 </p>
                    <p> 916-791-1221 </p>
                  </div>
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="social-icons-wrapper text-center">
              <a href="https://plus.google.com/roseville-pool-service" target="_self"><span class="glyphicon glyphicon-lg air-icon-social-google-plus"></span></a>
              <a href="https://twitter.com/roseville-pool-service" target="_self"><span class="glyphicon glyphicon-lg air-icon-social-twitter"></span></a>
              <a href="https://www.facebook.com/roseville-pool-service" target="_self"><span class="glyphicon glyphicon-lg air-icon-social-facebook"></span></a>
              <a href="https://www.linkedin.com/company/roseville-pool-service" target="_self"><span class="glyphicon glyphicon-lg air-icon-social-linkedin"></span></a>
            </div>
            <p class="text-center copyright">
              <b> © 2017 Roseville Pool Service </b>
            </p>
          </div>
        </div>
    </div>
  </footer>
  `
})
export class AppComponent {
  title = 'ftw';
}
