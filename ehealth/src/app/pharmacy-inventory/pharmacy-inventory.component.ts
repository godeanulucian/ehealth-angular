import { Component, EventEmitter, Output } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-pharmacy-inventory',
  templateUrl: './pharmacy-inventory.component.html',
  styleUrls: ['./pharmacy-inventory.component.css']
})
export class PharmacyInventoryComponent {
  constructor(private $gaService: GoogleAnalyticsService, private darkModeService:ThemeService) {}

  trackEvent() {
    this.$gaService.event('eventName', 'eventCategory', 'eventLabel');
  }

  theme = 'light-mode';
  x: boolean = false;

  toggleMode() {
    this.x = !this.x;
  }

  items = [
    { itemID: 1, itemName: 'Paracetamol', provider: 'MegaMed', stockLevel: 50, unitPrice: 10.99, expirationDate: '2023-12-31' },
    { itemID: 2, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 3, itemName: 'Aspirin', provider: 'PharmaCare', stockLevel: 75, unitPrice: 15.50, expirationDate: '2023-11-30' },
    { itemID: 4, itemName: 'Cough Syrup', provider: 'HealthPlus', stockLevel: 30, unitPrice: 8.75, expirationDate: '2023-10-15' },
    { itemID: 5, itemName: 'Antibiotic', provider: 'MediCare', stockLevel: 60, unitPrice: 25.99, expirationDate: '2024-02-28' },
    { itemID: 6, itemName: 'Vitamin C', provider: 'Wellness', stockLevel: 90, unitPrice: 12.25, expirationDate: '2023-09-20' },
    { itemID: 7, itemName: 'Pain Relief Gel', provider: 'ReliefPharma', stockLevel: 40, unitPrice: 18.50, expirationDate: '2023-11-15' },
    { itemID: 8, itemName: 'Allergy Medication', provider: 'AllerCare', stockLevel: 25, unitPrice: 30.00, expirationDate: '2023-10-31' },
    { itemID: 9, itemName: 'Eye Drops', provider: 'ClearSight', stockLevel: 15, unitPrice: 14.99, expirationDate: '2023-09-10' },
    { itemID: 10, itemName: 'Stomach Relief Tablets', provider: 'GastroHealth', stockLevel: 50, unitPrice: 22.50, expirationDate: '2024-01-15' },
  ];
  
  filteredData: any[] = this.items.slice();

  search(searchTerm: string) {
    this.filteredData = this.items.filter((item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();
  onSearch() {  
    this.search(this.searchTerm);
    this.searchEvent.emit(this.searchTerm);
  }
  
}
