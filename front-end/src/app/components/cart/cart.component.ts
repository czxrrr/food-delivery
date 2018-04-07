import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable()
export class CartComponent implements OnInit {

  constructor(private cart:CartService, public dialog: MatDialog) {
    cart.cart$.subscribe(cart_data => {
      this.cart_data=cart_data;
      if (this.cart_data.length===0){
        this.empty=true;
        this.checkingOut=false;
      }else{
        this.empty=false;
      }
    });
  }
  cart_data;
  checkingOut=false;
  empty=true;
  ngOnInit() {
    this.cart_data=this.cart.getCartData();
  }
  clearCart(){
    this.cart.clearCart();
  }

  checkout(){
    if (this.cart_data.length===0){
      this.empty=true;
    }
    else{
      this.empty=false;
      this.checkingOut=true;
    }

  }

}

