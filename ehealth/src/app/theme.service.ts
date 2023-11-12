import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = false;
  constructor() { }

  changeTheme() {
    this.isDarkMode = !this.isDarkMode;   // mirroring
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }
}
