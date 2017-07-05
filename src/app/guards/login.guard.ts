import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate() {

        if (localStorage.getItem('token')) {
          this.router.navigate(['/index']);
            return false;
        }

        // not logged in so redirect to login page
        return true;
    }
}
