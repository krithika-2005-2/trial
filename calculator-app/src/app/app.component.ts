import { Component } from '@angular/core';
import { CalcComponent } from './calc/calc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalcComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator-app';
}
