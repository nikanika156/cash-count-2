import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeType } from '../../types/change-type';
import { CashItem } from '../../types/cash-item';


@Component({
  selector: 'app-change-quantity',
  imports: [],
  templateUrl: './change-quantity.html',
  styleUrl: './change-quantity.css',
})
export class ChangeQuantity {
  @Input() cash!: CashItem;

  @Output() getAction = new EventEmitter<ChangeType>();

  changeQuantity(value: number, isPositiveChange: boolean) {
    isPositiveChange ? (this.cash.count += value) : (this.cash.count -= value);
    this.getAction.emit({ value, isPositiveChange });
  }
}
