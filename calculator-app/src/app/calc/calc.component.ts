import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  resultDisplayed: boolean = false;
  expression: string = '';
  display: string = '';
  firstOperand: number | null = null;
  operator: string = '';
  waitingForSecond: boolean = false;

  append(value: string) {
    if (this.resultDisplayed) {
      this.expression = value;
      this.resultDisplayed = false;
    } else {
      this.expression += value;
    }
  
    this.display = value;
  }
  

  clear() {
    this.display = '';
    this.expression = '';
    this.firstOperand = null;
    this.operator = '';
    this.waitingForSecond = false;
    this.resultDisplayed = false;
  }

  toggleSign() {
    if (!this.display) return;
    this.display = (parseFloat(this.display) * -1).toString();
  }

  percent() {
    if (!this.expression) return;
  
    const lastChar = this.expression.slice(-1);
    if (/\d/.test(lastChar)) {
      this.expression += '%';
      this.display = this.expression;
    }
  }

  // percent() {
  //   if (!this.display) return;
  //   this.display = (parseFloat(this.display) / 100).toString();
  // }

  setOperator(op: string) {
    if (this.resultDisplayed) {
      this.resultDisplayed = false;
    }
  
    //prevent operator 1++
    const lastChar = this.expression.slice(-1);
    if (['+', '-', '×', '÷'].includes(lastChar)) {
      this.expression = this.expression.slice(0, -1); 
    }
  
    this.expression += op;
    this.display = op;
  }
  

  backspace() {
    if (this.resultDisplayed) {
      // If result is showing, reset expression
      this.expression = '';
      this.display = '';
      this.resultDisplayed = false;
      return;
    }
  
    // Remove last char from both display and expression
    if (this.display.length > 0) {
      this.display = this.display.slice(0, -1);
    }
    if (this.expression.length > 0) {
      this.expression = this.expression.slice(0, -1);
    }
  }

  calculate() {
    if (!this.expression) return;
  
    // Convert symbols to valid JS operators
    const safeExpression = this.expression
      .replace(/×/g, '*')
      .replace(/÷/g, '/')
      .replace(/(\d+)%/g, '($1/100)');  // Convert 80% → (80/100)
  
    try {
      const result = eval(safeExpression);
      this.display = result.toString();
      this.expression = result.toString();
      this.resultDisplayed = true;
    } catch {
      this.display = 'Error';
      this.expression = '';
    }
  }
  

   
}