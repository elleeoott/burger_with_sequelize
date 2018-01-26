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

  db.Burger.create ({

      burger_name: req.body.burger_name }

  ).then(function() {

    res.redirect("index");
  });
}

//put app to push eaten burgers to the db

//SOMETHING LIKE THIS

// app.put("/id", function(req, res) {

//   db.Burger.update ({

//     eaten:true;

//     where: req.params.id
//   });

//     res.redirect("index")
// }

//NOT EXPORT TO ROUTER, WHERE TO EXPORT?

// module.exports = router;
