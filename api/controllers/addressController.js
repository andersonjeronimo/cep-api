"use strict";
// var mongoose = require("mongoose");
// var Address = mongoose.model("Address");
var _ = require("underscore");

var addresses = require("../data/logradouros.json");

exports.read_an_address = function(req, res) {
  var address = _.filter(addresses, function(logradouro) {
    // return logradouro["CEP"] === parseInt(req.params.code);
    return logradouro["CEP"] === req.params.code;
  });
  res.json(address[0]);
};

exports.search_a_zipcode = function(req, res) {
  var zip = _.filter(addresses, function(logradouro) {
    return (logradouro["ENDERECO"]).toUpperCase().indexOf((req.params.address).toUpperCase()) > 1;
  });
  res.json(zip);
};

//search_an_address

/* exports.list_all_addresses = function(req, res) {
  Address.find({}, function(err, address) {
    if (err) res.send(err);
    res.json(address);
  });
};
exports.create_an_address = function(req, res) {
  var new_address = new Address(req.body);
  new_address.save(function(err, address) {
    if (err) res.send(err);
    res.json(address);
  });
};

exports.update_an_address = function(req, res) {
  Address.findOneAndUpdate(
    { _id: req.params.code },
    req.body,
    { new: true },
    function(err, address) {
      if (err) res.send(err);
      res.json(address);
    }
  );
};
exports.delete_an_address = function(req, res) {
  Address.remove(
    {
      _id: req.params.code
    },
    function(err, address) {
      if (err) res.send(err);
      res.json({ message: "Address successfully deleted" });
    }
  );
}; */
