import { Injectable } from '@angular/core';
import { Restaurant} from '../models/restaurant.model';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {Recipe} from '../models/recipe.model';
import {Subject} from 'rxjs/Subject';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class DataService {


  constructor(private http: HttpClient, private cookie:CookieService) { }

  private user_loginSource= new Subject<string>();
  user_login$ = this.user_loginSource.asObservable();
  user_login = 'false';
  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>('http://localhost:3000/api/v1/restaurants');
  }
  getRestaurant(id: String): Observable<Restaurant>{
    return this.http.get<Restaurant>(`http://localhost:3000/api/v1/restaurants/${id}`);
  }

  login(email,password): Observable<any>{
    var httpOptions;
    return this.http.post<any>(`http://localhost:3000/api/v1/auth/login`,{email:email, password: password},httpOptions)
  }

  register(email,password): Observable<any>{
    var httpOptions;
    return this.http.post<any>(`http://localhost:3000/api/v1/auth/register`,{email:email, password: password},httpOptions)
  }
  getOrders(){
    var httpOptions;
    httpOptions={'headers':{'authorization':this.cookie.get('token')}};
    return this.http.get<any>(`http://localhost:3000/api/v1/orders`,httpOptions);
  }

  add_order(cart,address,phone):Observable<any>{
    var httpOptions;
    httpOptions={'headers':{'authorization':this.cookie.get('token')}};
    let total=0;
    let recipes=[];
    let numbers=[];

    for (let e of cart){
      recipes.push(e.Recipe._id);
      numbers.push(e.number);
      total= total+e.Recipe.price*e.number;
    }

    return this.http.post<any>(`http://localhost:3000/api/v1/new_order`,{number:numbers, cart: recipes, total:total, address:address, phone:phone},httpOptions);
  }

  setUserstatus(value){
    this.user_login=value;
    this.user_loginSource.next(this.user_login)
  }

  getUserInfo():Observable<any>{
    var httpOptions;
    httpOptions={'headers':{'authorization':this.cookie.get('token')}};
    if (this.user_login ==="true"){
      return this.http.get<any>(`http://localhost:3000/api/v1/auth/myinfo`,httpOptions);
    }
  }
  private handleError(error:any): Promise<any> {
    return Promise.reject(error.body || error);
  }

}

