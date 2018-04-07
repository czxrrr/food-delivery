import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { CookieService} from 'ngx-cookie-service';
import { routing} from './app.routes';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

import { DataService } from './services/data.service';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { AddProblemComponent } from './components/add-problem/add-problem.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';


import {CartComponent} from './components/cart/cart.component';
import {CartService} from './services/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    AddProblemComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    CartComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [
    {
      provide:"data",
      useClass: DataService
    },
    CartService,
    CookieService],
  // put something in providers, it can be used every where
  bootstrap: [AppComponent]
})
export class AppModule { }
