var express = require("express"),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require("mongoose"),
  Message = require("./api/models/addressModel"),
  bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/addressdb");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require("./api/routes/addressRoutes");
routes(app);
app.listen(port);
console.log("CEP - RESTful API server started on: " + port);
