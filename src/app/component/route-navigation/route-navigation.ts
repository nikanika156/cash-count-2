import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-route-navigation',
  imports: [RouterLink],
  templateUrl: './route-navigation.html',
  styleUrl: './route-navigation.css',
})
export class RouteNavigation {
  @Input() routerLink!: string;
  @Input() text!: string;
  // @Input() size!: number;
  @Input() style!: number;
}
