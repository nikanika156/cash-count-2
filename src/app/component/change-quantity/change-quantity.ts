import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeType } from '../../types/change-type';


@Component({
  selector: 'app-change-quantity',
  imports: [],
  templateUrl: './change-quantity.html',
  styleUrl: './change-quantity.css',
})
export class ChangeQuantity {
  @Input() cash!: any;
  @Output() getAction = new EventEmitter<ChangeType>();

  changeQuantity(value: number, isPositiveChange: boolean) {
    console.log(this.cash);
    
    this.getAction.emit({ value, isPositiveChange });
  }

  // increase(number: number, value: any) {
  //   value.count += number;

  //   this.getAction.emit({ number, value });
  // }
  // decrease(number: number, value: any) {
  //   value.count += number;
  //   this.getAction.emit({number,value});
  // }
}
