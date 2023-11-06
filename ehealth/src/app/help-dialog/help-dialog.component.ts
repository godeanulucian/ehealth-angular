import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-dialog',
  templateUrl: './help-dialog.component.html',
})
export class HelpDialogComponent {
  info = 'Select Appointments tab if you want to see a doctor. Select Laboratory Tests tab if you want to get tested. Select Pharmacy Inventory tab to view the meds stock.';

  constructor(public dialogRef: MatDialogRef<HelpDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
