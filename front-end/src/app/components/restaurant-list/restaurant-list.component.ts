import {Component, Inject, OnInit} from '@angular/core';
import { Restaurant} from '../../models/restaurant.model'
import {subscriptionLogsToBeFn} from "rxjs/testing/TestScheduler";
import {Subscription} from "rxjs/Subscription";
import {MatCard} from "@angular/material";


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[] = [];
  constructor(@Inject("data") private data) { }

  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants(){
    this.data.getRestaurants()
      .subscribe(data => this.restaurants = data);
  }
}
