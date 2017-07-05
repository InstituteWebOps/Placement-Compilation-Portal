import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class IndexGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate() {

        if (localStorage.getItem('token')) {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/']);
        return false;
    }
}
