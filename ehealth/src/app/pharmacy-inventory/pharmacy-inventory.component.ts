import { Component } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-pharmacy-inventory',
  templateUrl: './pharmacy-inventory.component.html',
  styleUrls: ['./pharmacy-inventory.component.css']
})
export class PharmacyInventoryComponent {
  constructor(private $gaService: GoogleAnalyticsService) {}

  trackEvent() {
    this.$gaService.event('eventName', 'eventCategory', 'eventLabel');
  }

  items = [
    { itemID: 1, itemName: 'Paracetamol', provider: 'MegaMed', stockLevel: 50, unitPrice: 10.99, expirationDate: '2023-12-31' },
    { itemID: 2, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 3, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 4, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 5, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 6, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 7, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 8, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 9, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' },
    { itemID: 10, itemName: 'Nurofen', provider: 'DrugBud', stockLevel: 100, unitPrice: 20.99, expirationDate: '2024-01-31' }
    // Add more items as needed
  ];
  filteredData: any[] = [];

  search(searchTerm: string) {
    this.filteredData = this.items.filter((item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
