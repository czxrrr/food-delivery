import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { CookieService} from 'ngx-cookie-service';
import { routing} from './app.routes';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';

import { DataService } from './services/data.service';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import {CartComponent} from './components/cart/cart.component';
import {CartService} from './services/cart.service';
import { OrderComponent } from './components/order/order.component';
import { UserComponent } from './components/user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantDetailComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    CartComponent,
    OrderComponent,
    UserComponent,
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
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    NgZorroAntdModule.forRoot()

  ],
  providers: [
    {
      provide:"data",
      useClass: DataService
    },
    DataService,
    CartService,
    CookieService],
  // put something in providers, it can be used every where
  bootstrap: [AppComponent]
})
export class AppModule { }
