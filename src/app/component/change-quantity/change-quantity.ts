import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeType } from '../../types/change-type';
import { CashItem } from '../../types/cash-item';
import {MatCardActions} from '@angular/material/card'
import { MatFabButton, MatAnchor } from '@angular/material/button';
import { Summation } from '../../service/summation/summation';


@Component({
  selector: 'app-change-quantity',
  imports: [MatFabButton, MatAnchor],
  templateUrl: './change-quantity.html',
  styleUrl: './change-quantity.css',
})
export class ChangeQuantity {
  constructor(private summation:Summation){}
  @Input() cashItem!: CashItem;



  changeQuantity(value: number) {
      this.summation.changeQuantity( this.cashItem.cash,value);
  }
}
