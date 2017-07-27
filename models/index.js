var mongoose = require("mongoose");

mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.MyProfile = require("./my-profile.js");

module.exports.HikingLocations = require("./housewives.js");