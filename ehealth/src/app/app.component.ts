import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { NavigationEnd, Router } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ehealth';

  x: boolean = false;
  theme = 'light-mode';

  constructor(private darkModeService: ThemeService, private router: Router) { 
  this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      gtag('config', 'G-7PQKTZ711Q', { 'page_path': event.urlAfterRedirects });
    }      
  })
}

  toggleMode() {
    this.x = !this.x;
  }
}