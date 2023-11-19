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
      phoneNumber: ['', Validators.required, Validators.pattern('[0-9]{10}')],
      sendConfirmation: [false]
    });

    this.appointmentForm.valueChanges.subscribe(console.log);
  }

  toggleMode() {
    this.x = !this.x;
  }

  handleSubmit() {
    console.log('Form valid. Execute submit.');
    if (this.appointmentForm.get('sendConfirmation')?.value) {
      console.log('Sending mail confirmation...');

      const emailAsStringCoerced = String(this.appointmentForm.get('email')?.value);
      const appointmentFormAsString = JSON.stringify(this.appointmentForm.value, null, 2);

      console.log('Appointment Details', appointmentFormAsString);
      this.sendMailToRecipient(emailAsStringCoerced, 'IriHealth - Appointment Confirmation', 'Appointment Details ' + appointmentFormAsString);
    }

    alert('Appointment scheduled succesfully!');
    this.router.navigate(['/appointments']);
    this.appointmentForm.reset();
  }

  public sendMailToRecipient(recipient: string, subject: string, body: string) {  // sends from user's mail client
    // generate the mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // create a temporary element (e.g., an anchor tag)
    const mailtoAnchor = document.createElement('a');
    mailtoAnchor.href = mailtoLink;

    // trigger a click event on the anchor
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: false,
      view: window,
    });
    mailtoAnchor.dispatchEvent(clickEvent);
  }


}
