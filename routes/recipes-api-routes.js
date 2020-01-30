var db = require("../models");

module.exports = function(app) {
  app.get("/api/recipes", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  app.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

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
