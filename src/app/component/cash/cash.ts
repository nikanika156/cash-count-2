import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ChangeQuantity } from '../change-quantity/change-quantity';
import { LucideAngularModule, LucideIconData, X } from 'lucide-angular';
import { ChangeType } from '../../types/change-type';
import { Summation } from '../../service/summation/summation';
import { FormsModule } from '@angular/forms';
import { CashItem } from '../../types/cash-item';

@Component({
  selector: 'app-cash',
  imports: [ChangeQuantity, FormsModule, LucideAngularModule],
  templateUrl: './cash.html',
  styleUrl: './cash.css',
})
export class Cash implements OnInit {
  X = X;
  cashArr: CashItem[] = [];
  constructor(private summation: Summation) {}

  ngOnInit(): void {
    this.summation.createArr();
    this.cashArr = this.summation.cashCount;
    this.summation.changeQuantity();
    console.log(this.cashArr);
    
  }
  @Output() sum = new EventEmitter<number>();

  // cashDenominations: string[] = [
  //   '5',
  //   '10',
  //   '20',
  //   '50',
  //   '100',
  //   '200',
  //   '500',
  //   '1000',
  //   '2000',
  //   '5000',
  //   '10000',
  // ];
  // cashCount: CashItem[] = [];
  // total: number = 0;

  // ngOnInit(): void {

  //   this.cashCount = this.cashDenominations.map(
  //     (c) => new CashItem(parseInt(c))
  //   );

  // }

  // result = this.cashCount.map((x) => x.count);

  // send(cash: CashItem, action: string | number) {
  //   this.sum.emit(this.cashCount.reduce((acc, item) => acc + item.total, 0));
  //   // console.log(this.cashCount.reduce((acc, item) => acc + item.total, 0));
  // }
  handleChanges(change: ChangeType) {}
}
