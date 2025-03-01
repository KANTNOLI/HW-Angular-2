import { Component } from '@angular/core';

@Component({
  selector: 'app-currency',
  standalone: false,
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent {
  currencyValue: number = this.rand(2, 4)
  inputUSA: number = 1.000
  inputBYN: number = this.setValueCash(1)

  setValueCash(active: number): number {
    switch (active) {
      case 1:
        this.inputBYN = Math.floor((this.inputUSA * this.currencyValue) * 1000) / 1000;
        return this.inputBYN
      default:
        this.inputUSA = Math.floor((this.inputBYN / this.currencyValue) * 1000) / 1000;
        return this.inputUSA
    }
  }


  rand(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min) + min ) * 1000) / 1000
  }

}
