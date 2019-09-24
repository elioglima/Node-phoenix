var mongoose = require("mongoose"); // The reason for this demo.
const config = require("../config");

module.exports = {
  start: () => {
    mongoose.connect(config.db.uri, config.db.options, function(err) {
      if (err) {
        global.logger.error("ERROR connecting: " + err);
        global.connectedToDatabase = err;
      } else {
        global.logger.info("Succeeded connected to Db!");
      }
    });
  }
};
