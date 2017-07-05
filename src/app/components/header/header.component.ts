import { Component } from '@angular/core';



@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html'
})

export class HeaderComponent  {
  User: string = "Nobody";
  query: string;
  loggedin: boolean;
  constructor(){

  }

  logout() {
   localStorage.removeItem('token');
  }

 isloggedin(): boolean{
   if(localStorage.getItem('token')){
     this.loggedin = true;
     this.User = localStorage.getItem('token');
     return true;
   }
   else
   {
     this.loggedin = false;
     return false;
   }
 }

}
