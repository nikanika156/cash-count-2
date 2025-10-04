import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-change-quantity',
  imports: [],
  templateUrl: './change-quantity.html',
  styleUrl: './change-quantity.css',
})
export class ChangeQuantity implements OnInit {
  @Input() cash!: any;
  @Output() getAction = new EventEmitter<any>();

  ngOnInit(): void {}

  increase(number: number, value: any) {
    value.count += number;

    this.getAction.emit({number,value});
  }
  decrease(number: number, value: any) {
    value.count += number;
    this.getAction.emit({number,value});
  }
}
