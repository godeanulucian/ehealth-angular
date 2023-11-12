import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  searchTerm: string = '';
 
  @Output() searchEvent = new EventEmitter<string>();
  onSearch() {
    this.searchEvent.emit(this.searchTerm);
  }

}
