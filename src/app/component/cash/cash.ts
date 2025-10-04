import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ChangeQuantity } from '../change-quantity/change-quantity';

import { LucideAngularModule, X } from 'lucide-angular';

class CashItem {
  constructor(public cash: number, public count: number | null = null) {}

  get total(): number {
    return Math.round(this.cash * this.count!) / 100;
  }
}
@Component({
  selector: 'app-cash',
  imports: [ChangeQuantity, FormsModule, LucideAngularModule],
  templateUrl: './cash.html',
  styleUrl: './cash.css',
})
export class Cash implements OnInit {
  readonly X = X;
  @Output() sum = new EventEmitter<number>();
  cashDenominations: string[] = [
    '5',
    '10',
    '20',
    '50',
    '100',
    '200',
    '500',
    '1000',
    '2000',
    '5000',
    '10000',
  ];

  cashCount: CashItem[] = [];
  total: number = 0;

  ngOnInit(): void {
    console.log(this.cashCount);

    this.cashCount = this.cashDenominations.map(
      (c) => new CashItem(parseInt(c))
    );

    console.log(this.total);
  }

  result = this.cashCount.map((x) => x.count);

  send(cash: CashItem, action: string | number) {
    this.sum.emit(this.cashCount.reduce((acc, item) => acc + item.total, 0));
    // console.log(this.cashCount.reduce((acc, item) => acc + item.total, 0));
  }
}
