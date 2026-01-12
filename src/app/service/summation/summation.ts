import { Injectable } from '@angular/core';
import { CashItem } from '../../types/cash-item';

@Injectable({
  providedIn: 'root',
})
export class Summation {
  cashDenominations: number[] = [
    5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000,
  ];
  cashCount: CashItem[] = [];
  total: number = 0;

  createArr() {
    if (this.cashCount.length > 0) {
      return this.cashCount;
    } else {
      this.cashCount = this.cashDenominations.map(
        (c) => new CashItem(c)
      );
      return this.cashCount;
    }
  }
  changeQuantity(index?: number) {
    index = 4;
    this.cashCount[index].count = 9;
    console.log(this.cashCount);
  }
}
