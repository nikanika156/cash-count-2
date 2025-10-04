import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Cash } from "./component/cash/cash";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Cash],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cash-count');
}
