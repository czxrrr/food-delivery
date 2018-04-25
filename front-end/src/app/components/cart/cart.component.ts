import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {DataService} from '../../services/data.service';
import {CookieService} from 'ngx-cookie-service';
import {Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable()
export class CartComponent implements OnInit {

  constructor(private data:DataService,private cart:CartService, private router:Router) {
    cart.cart$.subscribe(cart_data => {
      this.cart_data=cart_data;
      this.total_price=0;
      for (let e of this.cart_data){
        this.total_price= this.total_price+e.Recipe.price*e.number;
      }
      if (this.cart_data.length===0){
        this.empty=true;
        this.checkingOut=false;

      }else{
        this.empty=false;
      }
    });
    data.user_login$.subscribe(next => {
      this.login=next;
    });
  }
  cart_data;
  checkingOut=false;
  empty=true;
  total_price=0;
  token='';
  address;
  phone;
  order;
  login;

  ngOnInit() {
    this.login=this.data.getUserstatus();
    this.cart_data=this.cart.getCartData();
  }
  clearCart(){
    // delete all items in cart
    this.cart.clearCart();
  }

  checkout(){
    // login user can checkout
    console.log(this.login);
    if(this.login==='true'){
      if (this.cart_data.length===0){
        this.empty=true;
      }
      else{
        this.empty=false;
        this.checkingOut=true;
      }
    }
  }

  change(recipe,number){
    this.cart.change(recipe,number);
  }
  confirm(){
    this.data.add_order(this.cart_data,this.address,this.phone).subscribe(next =>{
        this.order=next;
        this.router.navigate(['orders']);
    }
    );
    this.clearCart()
  }


}

