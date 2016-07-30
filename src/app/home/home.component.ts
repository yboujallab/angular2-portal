import { provideRouter, RouterConfig }  from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Token } from '../objects/token';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }



}
