import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import {IndexComponent} from './components/index/index.component';
import {SearchComponent} from './components/search/search.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth/auth.service';
import { LoginGuard } from './guards/login.guard';
import { IndexGuard } from './guards/index.guard';


const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [LoginGuard]
    },
    {
      path: 'index',
      component: IndexComponent,
      canActivate: [IndexGuard]
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
      path: '**',
      redirectTo: ""
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
