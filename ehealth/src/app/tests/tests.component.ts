import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
  x: boolean = false;
  theme = 'light-mode';

  constructor(private darkModeService:ThemeService) {}

  toggleMode() {
    this.x = !this.x;
  }
}
