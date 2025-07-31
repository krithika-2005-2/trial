import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalsComponent } from './app/capitals/capitals.component';
import { CountriesComponent } from './app/countries/countries.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CapitalsComponent, CountriesComponent],
  template: `
    <div style="display: flex; justify-content: space-around;">
      <div>
        <h2>Capital Cities</h2>
        <app-capitals
          *ngFor="let capital of capitals"
          [capital]="capital"
          (dragStarted)="onCapitalDrag($event)">
        </app-capitals>
      </div>

      <div>
        <h2>Countries</h2>
        <app-countries
          *ngFor="let country of countries"
          [country]="country"
          (dropped)="onCountryDrop($event)">
        </app-countries>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  capitals = [
    { name: 'New Delhi', matched: null },
    { name: 'Lahore', matched: null },
    { name: 'Canberra', matched: null }
  ];

  countries = [
    { name: 'India', matched: null },
    { name: 'Pakistan', matched: null },
    { name: 'Australia', matched: null }
  ];

  capitalCountryMap: Record<string, string> = {
    'New Delhi': 'India',
    'Lahore': 'Pakistan',
    'Canberra': 'Australia'
  };

  draggedCapital: any = null;

  ngOnInit(): void {
    this.shuffleArray(this.capitals);
    this.shuffleArray(this.countries);
  }

  shuffleArray(arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  onCapitalDrag(capital: any) {
    this.draggedCapital = capital;
  }

  onCountryDrop(country: any) {
    if (!this.draggedCapital) return;

    const isCorrect = this.capitalCountryMap[this.draggedCapital.name] === country.name;
    this.draggedCapital.matched = isCorrect;
    country.matched = isCorrect;

    // trigger view update
    this.capitals = [...this.capitals];
    this.countries = [...this.countries];

    this.draggedCapital = null;
  }
}
