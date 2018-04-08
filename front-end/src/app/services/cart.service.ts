import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

import 'rxjs/add/observable/of';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class CartService {

  constructor() { }

  private cartSource= new Subject<Recipe[]>();

  cart$ = this.cartSource.asObservable();

  cartData = [];

  clearCart(){
    this.cartData=[];
    this.sendCartData();
  }
  getCartData(){
    return this.cartData;
  }

  change(recipe,number){
    for(let ele of this.cartData){
      if (ele.Recipe._id===recipe._id){
        ele.number = ele.number+number;
        if (ele.number<0){
          ele.number=0;
        }
      }
    }
    this.clearZero();
    this.sendCartData();
  }
  clearZero(){
    console.log(this.cartData);
    this.cartData=this.cartData.filter(obj => obj.number !== 0);
    console.log(this.cartData);
  }
  addRecipe(recipe){
    let existed=0;
    for(let ele of this.cartData){
      if (ele.Recipe._id===recipe._id){
        console.log(ele.Recipe, recipe);
        existed=1;
        ele.number = ele.number+1
      }
    }
    if (existed ===0 ){
      this.cartData.push({Recipe:recipe,number:1});
    }
    this.sendCartData();
  }
  sendCartData(){
    this.cartSource.next(this.cartData);
  }
}
