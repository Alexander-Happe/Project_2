var db = require("../models");

module.exports = function(app) {
  //get all recipes from the recipes table then return the JSON
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });
  //get specific recipe from the recipes table then return the JSON
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });
  //create a new recipe
  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });
  //delete an existing recipe
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });
};
