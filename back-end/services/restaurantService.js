var mongoose = require('mongoose');
RestaurantSchema = require("../models/restaurantModel");
Restaurant = mongoose.model("Restaurant",RestaurantSchema);

RecipeSchema = require("../models/recipeModel");
Recipe = mongoose.model("Recipe",RecipeSchema);


OrderSchema= require("../models/orderModel");
Order = mongoose.model("Order", OrderSchema);


var getRestaurants = function(){
  return new Promise((resolve, reject) => {
    Restaurant.find({}, function (err, restaurants){
      if (err){
        reject(err);
      }
      resolve(restaurants);
    })
  });
};

var getRestaurant = function(id){
  return new Promise((resolve, reject) => {

    Restaurant.findOne({_id:id}).populate('recipes').exec(function (err, restaurant){
      if (err){
          reject(err);
      }
      resolve(restaurant);
    })
  });
};

var getOrders = function(userid){
  return new Promise((resolve, reject) => {
    Order.find({user:userid}, function(err, orders){
        if (err){
            reject(err);
        }
        if (orders){
            resolve(orders);
        }
    });
  });
};

var newOrder = function(userid,cart,number,total){
    return new Promise((resolve, reject) => {
        console.log(number);
        Order.create({user:userid,cart:cart ,number:number, total:total},function(err, order){
            if (err){
                console.log(err);
                reject(err);
            }
            if (order){
                console.log(order);
                resolve(order);
            }
        });
    });
};

module.exports = {
    getRestaurants: getRestaurants,
    getRestaurant: getRestaurant,
    getOrders:getOrders,
    newOrder: newOrder
};

