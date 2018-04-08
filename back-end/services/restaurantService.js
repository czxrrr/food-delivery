var mongoose = require('mongoose');
RestaurantSchema = require("../models/restaurantModel");
RecipeSchema = require("../models/recipeModel");

Restaurant = mongoose.model("Restaurant",RestaurantSchema);
Recipe = mongoose.model("Recipe",RecipeSchema);

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

module.exports = {
  getRestaurants: getRestaurants,
  getRestaurant: getRestaurant,
};

