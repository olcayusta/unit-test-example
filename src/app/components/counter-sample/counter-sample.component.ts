import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-sample',
  templateUrl: './counter-sample.component.html',
  styleUrls: ['./counter-sample.component.scss']
})
export class CounterSampleComponent implements OnInit {
  value = 0;
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    if (this.value < 15) {
      this.value += 1;
      this.message = '';
    } else {
      this.message = 'Maximum reached!';
    }
  }

  decrement(): void {
    if (this.value > 0) {
      this.value -= 1;
      this.message = '';
    } else {
      this.message = 'Minimum reached!';
    }
  }

}
