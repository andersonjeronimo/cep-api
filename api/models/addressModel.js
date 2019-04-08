"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var addressSchema = new Schema({
  code: {
    type: String
  },
  address: {
    type: String
  }
});
module.exports = mongoose.model("Address", addressSchema);
