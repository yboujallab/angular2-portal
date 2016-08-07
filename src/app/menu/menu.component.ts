import { Component, OnInit } from '@angular/core';
import { provideRouter, RouterConfig }  from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css'],
  directives: [ROUTER_DIRECTIVES]

})
export class MenuComponent  {
  constructor() {}

}
