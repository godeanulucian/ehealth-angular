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
  // patientName!: string;
  // patientName = new FormControl('');
  doctorName!: string;
  reason!: string;
  date!: string;
  time!: string;
  email!: string;
  phone!: string;

  constructor(private darkModeService:ThemeService, private router: Router, private fb:FormBuilder) {}

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      patientName: ['', Validators.required],
      doctorName: ['', Validators.required],
      reason: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  get getPatientName() {
    return this.appointmentForm.get('patientName');
  }

  toggleMode() {
    this.x = !this.x;
  }

  handleSubmit() {
    if (this.appointmentForm.valid) {
      console.log('Form valid. Execute submit.');
      alert('Appointment scheduled succesfully!');
      this.router.navigate(['/appointments']);
    } else {
      console.log('Form not valid. Please verify all fields.');
      alert('Form not valid. Please verify all fields.')
    }
  }

}
