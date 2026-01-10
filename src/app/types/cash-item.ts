export class CashItem {
  constructor(public cash: number, public count: number = 0) {}
  get total() {
    return (this.cash * this.count) / 100;
  }
}
