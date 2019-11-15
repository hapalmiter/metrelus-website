import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//new WOW().init;

//Navbar highlight section on scroll
/*$('body').scrollspy({ target: '#navbarSupportedContent-7' });

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
})*/
