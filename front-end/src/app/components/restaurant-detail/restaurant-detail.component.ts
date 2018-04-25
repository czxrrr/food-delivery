import {Component, OnInit, Inject, Injectable} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import * as io from 'socket.io-client'

import { Restaurant } from '../../models/restaurant.model';
import { Recipe } from '../../models/recipe.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
@Injectable()
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;
  recipes: Recipe[];
  constructor(
    private route: ActivatedRoute,
    @Inject("data") private data,
    private cartService:CartService,
  ) {
  }


  add_to_cart(recipe){
    // add to cart
    this.cartService.addRecipe(recipe);
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data.getRestaurant(params['_id']).subscribe(
        data => {
          this.restaurant=data;
        }
      );
    });

    // this.route.params.subscribe(params => {
    //   this.restaurant = this.data.getRestaurant(params['id'])
  }

}
