import { Component } from '@angular/core';
import { Cash } from "../../component/cash/cash";
import { TotalCash } from "../../component/total-cash/total-cash";

@Component({
  selector: 'app-calculate-page',
  imports: [Cash, TotalCash],
  templateUrl: './calculate-page.html',
  styleUrl: './calculate-page.css',
})
export class CalculatePage {
  sum: number = 0;
  handleSum(num: number) {
    this.sum = num;
  
    
  }
}
