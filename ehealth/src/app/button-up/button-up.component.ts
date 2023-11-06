import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.css']
})
export class ButtonUpComponent {
  @ViewChild('buttonUp', { static: true }) buttonUp!: ElementRef;

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  onMouseOver() {
    this.buttonUp.nativeElement.style.opacity = '1.0';
  }

  onMouseOut() {
    this.buttonUp.nativeElement.style.opacity = '0.5';
  }

}
