import { Component } from '@angular/core';


@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss']
})
export class DeadlineComponent {

  valueInput: string = '';
  valueSelect: string = '';
  info!: string[];
  count = 0;

  submit(event: MouseEvent) {
    event.preventDefault()
  }

  saveVal(value: string) {
    this.valueInput = value;
  }

  selectValue(value: string) {
    this.valueSelect = value;
    if (this.valueSelect !== '0') {
      this.info = [this.valueInput, this.valueSelect]
    }
  }

  increment(e: MouseEvent) {
    e.preventDefault()
    if (this.count >= 60) {
      this.count = 60;
      return;
    }
    this.count++;
  }
  decrement(e: MouseEvent) {
    e.preventDefault()
    if (this.count <= 0) {
      this.count = 0;
      return;
    }
    this.count--;
  }


}










