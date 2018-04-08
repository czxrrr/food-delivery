import { Injectable } from '@angular/core';
import { Restaurant} from '../models/restaurant.model';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject} from "rxjs/BehaviorSubject";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import {Recipe} from '../models/recipe.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {


  constructor(private http: HttpClient) { }

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

  confirm(auth,cart):Observable<any>{
    var httpOptions;
    return this.http.post<any>(`http://localhost:3000/api/v1/auth/register`,{auth:auth, cart: cart},httpOptions);
  }

  setUserstatus(value){
    this.user_login=value;
    this.user_loginSource.next(this.user_login)
  }

  private handleError(error:any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.body || error);
  }

}

