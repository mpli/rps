// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
import 'angular2-universal-polyfills';
import 'ts-helpers';
import './__workaround.node'; // temporary until 2.1.1 things are patched in Core

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';

// App
import { MainModule } from './node.module';

// Routes
import { routes } from './server.routes';

// Redirection Routes
import { redirections } from './server.redirection';

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', createEngine({
  ngModule: MainModule,
  providers: [
    // use only if you have shared state between users
    // { provide: 'LRU', useFactory: () => new LRU(10) }

    // stateless providers only since it's shared
  ]
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.set('json spaces', 2);

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('dev'));

function cacheControl(req, res, next) {
  // instruct browser to revalidate in 2592000 seconds
  res.header('Cache-Control', 'max-age=2592000');
  next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use('/sitemap.xml', cacheControl, express.static(path.join(__dirname, 'sitemap.xml'), {maxAge: 30}));
app.use('/robots.txt', cacheControl, express.static(path.join(__dirname, 'robots.txt'), {maxAge: 30}));
app.use(cacheControl, express.static(path.join(ROOT, 'dist/client'), {index: false}));

//
/////////////////////////
// ** Example API
// Notice API should be in aseparate process
import { serverApi, createTodoApi, sendMailApi } from './backend/api';
// Our API for demos only
app.get('/data.json', serverApi);
app.use('/api', createTodoApi());
app.post("/api/send", sendMailApi);

process.on('uncaughtException', function (err) { 
  console.error('Catching uncaught errors to avoid process crash', err);
});

function ngApp(req, res) {

  function onHandleError(parentZoneDelegate, currentZone, targetZone, error)  {
    console.warn('Error in SSR, serving for direct CSR');
    res.sendFile('index.html', {root: './src'});
    return false;
  }

  Zone.current.fork({ name: 'CSR fallback', onHandleError }).run(() => {
    res.render('index', {
      req,
      res,
      // time: true, // use this to determine what part of your app is slow only in development
      preboot: false,
      baseUrl: '/',
      requestUrl: req.originalUrl,
      originUrl: `http://localhost:${ app.get('port') }`
    });
  });

}

/**
 * use universal for specific routes
 */
app.get('*', function(req, res, next) {
  if (req.headers.host.match(/^www\./) !== null ) {
    res.redirect(301, 'https://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
})

app.get('*', function(req, res, next) {
  if (req.headers.host.match(/^roseville\./) !== null ) {
    res.redirect(301, 'https://' + req.headers.host.replace(/^roseville\./, '') + req.url);
  } else {
    next();
  }
})

app.get('*', function(req, res, next) {
   if (req.headers.host.match(/^rosevillepoolservice\.net/) !== null ) {
     res.redirect(301, 'https://' + req.headers.host.replace(/^rosevillepoolservice\.net/, 'rosevillepoolservice.com') + req.url);
   } else {
     next();
   }
 })

redirections.forEach(redirection => {
  app.get(`/${redirection.from}`, function(req, res) { res.redirect(301, `/${redirection.to}`); });
});

app.get('/', ngApp);
routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  // app.get(`/${route}/*`, ngApp);
  app.get(`/${route}/*`, function(req, res) { res.redirect(301, `/${route}`); });
});

app.get('*', function(req, res) {
  // res.setHeader('Content-Type', 'application/json');
  // var pojo = { status: 404, message: 'No Content' };
  // var json = JSON.stringify(pojo, null, 2);
  // res.status(404).send(json);
  res.redirect(301, '/home');
});

// Server
let server = app.listen(app.get('port'), () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});

