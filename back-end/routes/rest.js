var express = require("express");
var router = express.Router();
var jwt = require('jsonwebtoken');
var config = require("../config.js");

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var restaurantService = require("../services/restaurantService");

router.get("/restaurants", function(req, res){
  restaurantService.getRestaurants()
    .then(restaurants => res.json(restaurants));
});

router.get("/restaurants/:id", function(req, res){
  var id = req.params.id;
  restaurantService.getRestaurant(id)
      .then(restaurant => res.json(restaurant));
});

router.get("/orders", function(req, res){
    var token = req.headers['authorization'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        //res.status(200).send(decoded.id);
        restaurantService.getOrders(decoded.id)
            .then(orders => {
                res.json(orders);
                //console.log(orders);
        });
    });
});

router.post("/new_order", function(req, res){
    var token = req.headers['authorization'];
    var userid= '';
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        //res.status(200).send(decoded.id);
        userid=decoded.id;
    });

    restaurantService.newOrder(userid,req.body.cart,req.body.number,req.body.total,req.body.address,req.body.phone)
      .then(order => res.json(order));
});


module.exports = router;