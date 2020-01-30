var db = require("../models");
var axios = require("axios")

module.exports = function (app) {
    app.get("/api/inventory", function (req, res) {
        db.Inventory.findAll({}).then(function (dbInv) {
            res.json(dbInv)
        });
    });
    app.get("/api/receive", function (req, res) {
        axios({
            url: 'https://api.upcitemdb.com/prod/trial/lookup?upc=012000811203',
            method: 'get'
        }).then((response) => {
            res.json(response)
        });
        //axios call to url promise to get data back and send back res.json
    });
    app.get("/api/critical", function (req, res) {
        db.Inventory.findAll({
            where: { isCritical: true }
        }).then(function (dbInv) {
            res.json(dbInv)
        });
    });
    app.post("/api/inventory", function (req, res) {
        db.Inventory.create({
            item: req.body.item,
            qty: req.body.qty,
            unit: req.body.unit,
            critical: req.body.critical
        }).then(function (dbInv) {
            res.json(dbInv)
        });
    });


    app.put("/api/inventory/:id", function (req, res) {
        db.Inventory.update({
            qty: req.body.qty
        }, {
            where: {
                id: req.params.id
            }
        })
    }).then(function (req, res) {
        db.Inventory.update({
            isCritical: false
        }, {
            where: {
                qty: {
                    $gte: db.inventories.critical
                }
            }

        }).then(function (dbInv) {
            res.json(dbInv);
        });

    });
    app.put("/api/inventory/:id", function (req, res) {
        db.Inventory.update({
            isCritical: false
        }, {
            where: {
                qty: {
                    $gte: db.inventories.critical
                }
            }
        }).then(function (dbInv) {
            res.json(dbInv);
        });
    });

};