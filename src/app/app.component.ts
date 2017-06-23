import { Component, EventEmitter } from '@angular/core';
import { IndexComponent } from './components/index/index.component';

@Component({
  selector: 'my-app',
  template: `<header></header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  constructor(){
  }
}
