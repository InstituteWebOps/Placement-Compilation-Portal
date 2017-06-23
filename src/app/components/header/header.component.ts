import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
})
export class HeaderComponent  { 
  User: string = "Aakarsh";
  query: string;
}
