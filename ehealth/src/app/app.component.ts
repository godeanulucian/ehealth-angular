import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ehealth';

  theme: string | undefined;
  currentTheme: string | undefined;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.currentTheme.subscribe(theme => {
      this.currentTheme = theme;
      document.body.className = theme;
    });
  }

  toggleTheme() {
    if (this.theme === 'light-mode') {
      this.themeService.changeTheme('dark-mode');
    } else {
      this.themeService.changeTheme('light-mode');
    }
  }
}





