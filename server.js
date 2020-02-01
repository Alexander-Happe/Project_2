var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/recipes-api-routes.js")(app);
require("./routes/inv-api-routes.js")(app);

db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

app.post("/api/inventory", function(req, res) {
  db.inventory.create("tomato", 10, "eaches").then(function(dbInventory) {
    res.json(dbInventory);
  });
});
