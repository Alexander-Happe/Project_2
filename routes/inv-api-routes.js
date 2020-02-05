var db = require("../models");
var axios = require("axios");

module.exports = function (app) {
  //
  app.get("/api/inventory", function (req, res) {
    db.Inventory.findAll({}).then(function (dbInv) {
      res.json(dbInv);
    });
  });
  //GET request to send API a UPC and get back the JSON data
  app.get("/api/receive/:upc", function (req, res) {
    axios({
      url:
        "https://api.upcitemdb.com/prod/trial/lookup?upc=" + req.params.upc,
      method: "get"
    }).then(response => {
      console.log(response);
      res.json(response.data);
    });
  });
  //GET request to find all "Critial" inventory so it can be displayed on the inventory screen
  app.get("/api/critical", function (req, res) {
    db.Inventory.findAll({
      where: { isCritical: true }
    }).then(function (dbInv) {
      res.json(dbInv);
    });
  });
  //POST request to add new items to the inventory
  app.post("/api/inventory", function (req, res) {
    db.Inventory.create({
      item: req.body.item,
      qty: req.body.qty,
      unit: req.body.unit,
      critical: req.body.critical,
      isCritical: req.body.isCritical
    }).then(function (dbInv) {
      res.json(dbInv);
    });
  });
  //PUT request to update the quantity of an inventory item then update its "critial" status if the qty is no longer below the threshold
  app.put("/api/inventory/:id", function (req, res) {
    db.Inventory.update(
      {
        qty: req.body.qty
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(function (req, res) {
      db.Inventory.update(
        {
          isCritical: false
        },
        {
          where: {
            qty: {
              $gte: db.inventories.critical
            }
          }
        }
      ).then(function (dbInv) {
        res.json(dbInv);
      });
    });
  });

  app.put("/api/inventory/:id", function (req, res) {
    db.Inventory.update(
      {
        isCritical: false
      },
      {
        where: {
          qty: {
            $gte: db.inventories.critical
          }
        }
      }
    ).then(function (dbInv) {
      res.json(dbInv);
    });
  });
};
