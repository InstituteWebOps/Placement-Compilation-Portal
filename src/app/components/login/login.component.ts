import { Component } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
})

export class LoginComponent {
   errorMsg : any;
   successMsg : any;
   loginData = {
     username: "",
     password: ""
   };

    constructor(
      private authService:AuthService,
      private route: ActivatedRoute,
      private router: Router){

    }

    Login(event: any){
     event.preventDefault();
     if(this.loginData.username === this.loginData.password)
     {
       if(this.loginData.username === 'akshay' || this.loginData.username === 'aakarsh' || this.loginData.username === 'jibin')
        {
          localStorage.setItem('token',this.loginData.username);
          this.router.navigate(['/index']); //remove this if using authService
        }
      else{
        this.errorMsg = "Invalid username or password";
      }
     }
     else{
       this.errorMsg = "Invalid username or password";
     }
    /* this.authService.login(this.loginData).subscribe(data => {
       if(data.success)
       {
        this.authService.setToken(data.token);
         this.successMsg = data.message + '...redirecting to profile page';
         this.loginData.username = null;
         this.loginData.password = null;
         this.errorMsg = null;
         this.router.navigate(['/index']);
       }
       else {
         this.successMsg = null;
         this.errorMsg=data.message;
       }
     }); */

};

}
