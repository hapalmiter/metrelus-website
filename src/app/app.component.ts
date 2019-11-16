import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Metrelus, Inc';

  navbarOpen = false;

	toggleNavbar() {
	  this.navbarOpen = !this.navbarOpen;
	}
}

