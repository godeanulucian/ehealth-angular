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
