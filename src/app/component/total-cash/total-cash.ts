import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total-cash',
  imports: [],
  templateUrl: './total-cash.html',
  styleUrl: './total-cash.css'
})
export class TotalCash {
  @Input() sum!:number


}
