var db = require("../models");

module.exports = function (app) {
  //get all recipes from the recipes table then return the JSON
  app.get("/api/recipes", function (req, res) {
    db.Recipe.findAll({}).then(function (dbRecipes) {
      res.json(dbRecipes);
    });
  });
<<<<<<< HEAD

  app.get("/api/recipes/:id", function(req, res) {
    db.Recipe.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipes) {
=======
  //create a new recipe
  app.post("/api/recipes", function (req, res) {
    db.Recipe.create(req.body).then(function (dbRecipes) {
>>>>>>> 41433495405377ba863670878a0b315ed4a09191
      res.json(dbRecipes);
    });
  });
  //delete an existing recipe
  app.delete("/api/recipes/:id", function (req, res) {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipes) {
      res.json(dbRecipes);
    });
  });
};
