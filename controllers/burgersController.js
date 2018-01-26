var express = require("express");
var Sequelize = require("sequelize");

// var router = express.Router();
var burger = require("../models/burger.js");

//get app for grabbing our index of burgers

app.get("/index", function(req, res) {

  db.Burger.findALL ({

    order: ["burger_name"]
  }).then(function(data) {

    //get all the burgers
  });

  //push back to handlebars

  res.render(index);
});

//post app to create new burgers

app.post("/", function(req, res) {

  db.Burger.create (

      burger_name: req.body.burger_name }

  ).then(function() {

    res.redirect
  })
}

//put app

module.exports = router;
