import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();
  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }
  theme = 'light-mode';

  constructor(private darkModeService:ThemeService) {}

  x: boolean = false;

  toggleMode() {
    this.x = !this.x;
  }

}
