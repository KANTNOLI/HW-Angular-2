import { Component } from '@angular/core';

@Component({
  selector: 'app-gpt',
  standalone: false,
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.css'
})
export class GptComponent {
  private variate: string[] = ["msg1", "msg2", "msg3", "msg4"]
  msgs: string[] = []

  state: boolean = false
  setState() {
    this.msgs.push(this.variate[this.rand(0, 3)])
  }


  rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }
}
