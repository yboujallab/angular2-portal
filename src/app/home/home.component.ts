import { provideRouter, RouterConfig }  from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Token } from '../objects/token';
import  {MenuComponent} from '../menu/menu.component'

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [MenuComponent]
})

export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }



}
