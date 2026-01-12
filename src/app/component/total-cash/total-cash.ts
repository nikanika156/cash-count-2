import { Component, inject, Input, OnInit, Signal } from '@angular/core';
import { Summation } from '../../service/summation/summation';
import { MatFabButton } from '@angular/material/button';
@Component({
  selector: 'app-total-cash',
  imports: [MatFabButton],
  templateUrl: './total-cash.html',
  styleUrl: './total-cash.css',
})
export class TotalCash {
  summation = inject(Summation);
}
