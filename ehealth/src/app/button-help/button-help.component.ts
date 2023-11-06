import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from '../help-dialog/help-dialog.component';

@Component({
  selector: 'app-button-help',
  templateUrl: './button-help.component.html',
  styleUrls: ['./button-help.component.css']
})
export class ButtonHelpComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(HelpDialogComponent);
  }
}
