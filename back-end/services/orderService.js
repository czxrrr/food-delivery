var mongoose = require('mongoose');
RestaurantSchema = require("../models/restaurantModel");
RecipeSchema = require("../models/recipeModel");
OrderSchema = require("../models/orderModel");

Restaurant = mongoose.model("Restaurant",RestaurantSchema);
Recipe = mongoose.model("Recipe",RecipeSchema);
Order = mongoose.model("Order",OrderSchema);

// var addOrder = function(){
//     // var token = req.headers['authorization'];
//     // if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
//     //
//     // jwt.verify(token, config.secret, function(err, decoded) {
//     //     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
//     //
//     //     res.status(200).send(decoded);
//     // });
//   return new Promise((resolve, reject)=>{
//     user=
//     Order.create({User:});
//
//   });
// };
//
// var getRestaurants = function(){
//   return new Promise((resolve, reject) => {
//     Restaurant.find({}, function (err, restaurants){
//       if (err){
//         reject(err);
//       }
//       resolve(restaurants);
//     })
//   });
// };
//
// var getRestaurants = function(){
//     return new Promise((resolve, reject) => {
//         Restaurant.find({}, function (err, restaurants){
//         if (err){
//             reject(err);
//         }
//         resolve(restaurants);
//     })
// });
// };
//
// var getRestaurant = function(id){
//   return new Promise((resolve, reject) => {
//
//     Restaurant.findOne({_id:id}).populate('recipes').exec(function (err, restaurant){
//       if (err){
//           reject(err);
//       }
//       resolve(restaurant);
//     })
//   });
// };



module.exports = {

};

