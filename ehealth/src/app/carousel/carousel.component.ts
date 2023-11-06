import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    { image: 'assets/appointment.jpg' },
    { image: 'assets/labtest.jpg' },
    { image: 'assets/pharma.jpg' },
  ];
}
