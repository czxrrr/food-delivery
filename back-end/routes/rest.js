var express = require("express");
var router = express.Router();

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

router.get("/orders/", function(req, res){
    var token = req.headers['authorization'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        //res.status(200).send(decoded.id);
        restaurantService.getOrders(decoded.id)
            .then(orders => res.json(orders));
    });

});

module.exports = router;