"use strict";
module.exports = function(app) {
  var address = require("../controllers/addressController");
  // messages Routes
/*   app
    .route("/address")
    .get(address.list_all_addresses)
    .post(address.create_an_address); */
  app
    .route("/address/:code")
    .get(address.read_an_address);
    /* .put(address.update_an_address)
    .delete(address.delete_an_address); */
  app
  .route("/search/:address")
  .get(address.search_a_zipcode);
};
