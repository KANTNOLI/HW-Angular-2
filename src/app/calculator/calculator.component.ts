import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: false,
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  history: string[] = []
  visual: string = "2 + 2 = 4"

  valueA: number = 2
  valueB: number = 2
  valueC: string = "+"

  setVisualExample() {
    let result: number | string = -1

    switch (this.valueC) {
      case "+":
        result = this.valueA + this.valueB; break;
      case "-":
        result = this.valueA - this.valueB; break;
      case "/":
        result = this.valueA / this.valueB; break;
      case "*":
        result = this.valueA * this.valueB; break;
      case "**":
        result = this.valueA ** this.valueB; break;
      default:
        result = 'Error 1.0'; break;
    }

    this.visual = `${this.valueA} ${this.valueC} ${this.valueA} = ${result}`
  }

  saveResult() {
    console.log(1);
    this.history.push(this.visual)
    console.log(this.history);
  }
}
