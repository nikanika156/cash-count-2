import {
  computed,
  EventEmitter,
  Injectable,
  Output,
  output,
  signal,
} from '@angular/core';
import { CashItem } from '../../types/cash-item';

@Injectable({
  providedIn: 'root',
})
export class Summation {
  cashDenominations: number[] = [
    5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000,
  ];
  readonly cashCount = signal<CashItem[]>([]);
  sum = computed(() => {
    return this.cashCount().reduce((x, c) => x + c.total, 0);
  });

  createArr() {
    if (this.cashCount().length > 0) return this.cashCount();
    const initialValue = this.cashDenominations.map((x) => new CashItem(x));
    this.cashCount.set(initialValue);
    return initialValue;
  }
  //
  changeQuantity(cash: number, value: number) {
    this.cashCount.update((items) => {
      const checkCash = items.find((x) => x.cash == cash);
      if (checkCash) {
        checkCash.count += value;
      }
      return [...items];
    });
  }
}
