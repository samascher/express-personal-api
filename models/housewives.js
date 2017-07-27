var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HousewivesSchema = new Schema({
  id: Number,
  name: String,
  location: String,
  flaw: String,
  number_of_husbands: Number,
  current_status: String,
});

var Campsite = mongoose.model('Campsite', CampsiteSchema);

module.exports = Campsite;