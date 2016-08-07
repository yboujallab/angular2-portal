import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {MenuComponent} from '../menu/menu.component'
@Component({
  moduleId: module.id,
  selector: 'app-password',
  templateUrl: 'password.component.html',
  styleUrls: ['password.component.css'],
    directives: [MenuComponent]
})
export class PasswordComponent implements OnInit {

constructor(
    ) { }


  ngOnInit() {
  }


}
