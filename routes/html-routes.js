var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  app.get("/menu", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/menu.html"));
  });

  app.get("/orders", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/orders.html"));
  });

  app.get("/receiving", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/receiving.html"));
  });
};
