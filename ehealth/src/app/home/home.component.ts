import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  x: boolean = false;
  theme = 'light-mode';

  constructor(private darkModeService:ThemeService) {}

  toggleMode() {
    this.x = !this.x;
  }

}
