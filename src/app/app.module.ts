import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { DataComponent } from './components/data/data.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { LoginGuard } from './guards/login.guard';
import { IndexGuard } from './guards/index.guard';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, routing,Ng2PageScrollModule.forRoot()],
  declarations: [AppComponent, IndexComponent, LoginComponent, HeaderComponent, DataComponent, SearchComponent],
  providers : [AuthService,LoginGuard,IndexGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
