import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-capitals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="box"
      [ngClass]="{
        correct: capital?.matched === true,
        wrong: capital?.matched === false
      }"
      draggable="true"
      (dragstart)="handleDragStart()"
    >
      {{ capital?.name }}
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
export class CapitalsComponent {
  @Input() capital!: any;
  @Output() dragStarted = new EventEmitter<any>();

  handleDragStart() {
    this.dragStarted.emit(this.capital);
  }
}
