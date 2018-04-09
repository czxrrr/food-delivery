import {Routes, RouterModule} from "@angular/router";
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import {LogoutComponent} from './components/logout/logout.component';
import {OrderComponent} from './components/order/order.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "restaurants",
    pathMatch: "full"
  },
  {
    path: "logout",
    component: LogoutComponent,
    pathMatch: "full"
  },
  {
    path: "restaurants",
    component: RestaurantListComponent,
    pathMatch: "full"
  },
  {
    path: "orders",
    component: OrderComponent,
    pathMatch: "full"
  },
  {
    path: "user",
    component: UserComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent,
    pathMatch: "full"
  },
  {
    path: "restaurants/:_id",
    component: RestaurantDetailComponent,
  },
  {
    path: "**",
    component: RestaurantListComponent,
  },
];

export const routing = RouterModule.forRoot(routes);
