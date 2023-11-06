import { Component } from '@angular/core';

@Component({
  selector: 'app-button-dark-light-mode',
  templateUrl: './button-dark-light-mode.component.html',
  styleUrls: ['./button-dark-light-mode.component.css']
})
export class ButtonDarkLightModeComponent {
  theme = 'light-mode';

  toggleTheme(this: any) {
    this.theme = this.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
  }

}




