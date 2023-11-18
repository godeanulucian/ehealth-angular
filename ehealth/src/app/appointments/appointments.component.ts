import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  x: boolean = false;
  theme = 'light-mode';
  authentificationError: boolean = false;

  appointmentForm!: FormGroup;

  constructor(private darkModeService: ThemeService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      reason: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phoneNumber: ['', Validators.required, Validators.pattern('[0-9]{10}')]
    });

    this.appointmentForm.valueChanges.subscribe(console.log);
  }

  toggleMode() {
    this.x = !this.x;
  }

  handleSubmit() {
    console.log('Form valid. Execute submit.');
    alert('Appointment scheduled succesfully!');
    this.router.navigate(['/appointments']);
    location.reload();
  }

}
