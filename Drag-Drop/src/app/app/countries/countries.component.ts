import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="box"
      [ngClass]="{
        correct: country?.matched === true,
        wrong: country?.matched === false
      }"
      (dragover)="allowDrop($event)"
      (drop)="handleDrop()"
    >
      {{ country?.name }}
    </div>
  `,
  styles: [`
    .box {
      border: 2px solid #888;
      padding: 20px;
      margin: 10px;
      width: 200px;
      text-align: center;
      font-size: 20px;
      border-radius: 10px;
      background-color: white;
      transition: background-color 0.3s;
    }

    .correct {
      background-color: lightgreen;
    }

    .wrong {
      background-color: lightcoral;
    }
  `]
})
export class CountriesComponent {
  @Input() country!: any;
  @Output() dropped = new EventEmitter<any>();

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  handleDrop() {
    this.dropped.emit(this.country);
  }
}
