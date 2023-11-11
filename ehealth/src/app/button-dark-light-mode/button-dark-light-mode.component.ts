import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-button-dark-light-mode',
  templateUrl: './button-dark-light-mode.component.html',
  styleUrls: ['./button-dark-light-mode.component.css']
})
export class ButtonDarkLightModeComponent {
  theme = 'light-mode';

  constructor(private darkModeService:ThemeService) {}

  toggleTheme() {
    this.theme = this.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    document.body.className = this.theme;
  }

  toggleDarkMode() {
    this.darkModeService.changeTheme();
  }

}
