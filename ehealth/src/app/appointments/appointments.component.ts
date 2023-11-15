import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  x: boolean = false;
  theme = 'light-mode';

  constructor(private darkModeService:ThemeService, private router: Router) {}

  toggleMode() {
    this.x = !this.x;
  }

  handleSubmit() {
    alert('Success!');
    // reload component
    this.router.navigate(['/appointments']);
  }

}
