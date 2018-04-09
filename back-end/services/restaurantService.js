var mongoose = require('mongoose');
RestaurantSchema = require("../models/restaurantModel");
RecipeSchema = require("../models/recipeModel");
OrderSchema= require("../models/orderModel");
Restaurant = mongoose.model("Restaurant",RestaurantSchema);
Recipe = mongoose.model("Recipe",RecipeSchema);
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
    Orders.find({User:userid}, function(err, orders){
        if (err){
            console.log(err);
        }
    });
  });
};
module.exports = {
    getRestaurants: getRestaurants,
    getRestaurant: getRestaurant,
    getOrders:getOrders
};

