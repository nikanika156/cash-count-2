import { Component } from '@angular/core';

import { RouteNavigation } from "../route-navigation/route-navigation";

@Component({
  selector: 'app-header',
  imports: [ RouteNavigation],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
