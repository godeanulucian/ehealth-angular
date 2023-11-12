import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  x: boolean = false;
  theme = 'light-mode';

  constructor(private darkModeService:ThemeService) {}

  toggleMode() {
    this.x = !this.x;
  }
}
