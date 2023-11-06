import { Component, ElementRef, ViewChild } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-button-down',
  templateUrl: './button-down.component.html',
  styleUrls: ['./button-down.component.css']
})
export class ButtonDownComponent {
  @ViewChild('buttonDown', { static: true }) buttonDown!: ElementRef;

  theme:string | undefined;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.currentTheme.subscribe(theme => this.theme = theme);
  }

  toggleTheme() {
    if (this.theme === 'light-mode') {
      this.themeService.changeTheme('dark-mode');
    } else {
      this.themeService.changeTheme('light-mode');
    }
  }

  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  onMouseOver() {
    this.buttonDown.nativeElement.style.opacity = '1.0';
}

onMouseOut() {
  this.buttonDown.nativeElement.style.opacity = '0.5';
}

}
