import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ehealth';

  x: boolean = false;
  theme = 'light-mode';

  constructor(private darkModeService:ThemeService) {}

  toggleMode() {
    this.x = !this.x;
  }
}





