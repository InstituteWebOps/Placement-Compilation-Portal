import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './components/index/index.component';
import {SearchComponent} from './components/search/search.component';
import {LoginComponent} from './components/login/login.component';


const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
      path: 'index',
      component: IndexComponent
    },
    {
        path: 'search',
        component: SearchComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
