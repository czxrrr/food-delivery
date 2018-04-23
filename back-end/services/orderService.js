var mongoose = require('mongoose');
RestaurantSchema = require("../models/restaurantModel");
Restaurant = mongoose.model("Restaurant",RestaurantSchema);

RecipeSchema = require("../models/recipeModel");
Recipe = mongoose.model("Recipe",RecipeSchema);


OrderSchema= require("../models/orderModel");
Order = mongoose.model("Order", OrderSchema);

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

var newOrder = function(userid,cart,number,total,address,phone){
    return new Promise((resolve, reject) => {
        //console.log(number);
        Order.create({user:userid,cart:cart ,number:number, total:total, address: address, phone:phone},function(err, order){
            if (err){
                reject(err);
            }
            if (order){

                resolve(order);
            }
        });
    });
};

module.exports = {
    getOrders:getOrders,
    newOrder: newOrder
};

