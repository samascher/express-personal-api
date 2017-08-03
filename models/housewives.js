var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HousewivesSchema = new Schema({
  name: String,
  location: String,
  flaw: String,
  status: String,
});

var Housewives = mongoose.model('Housewives', HousewivesSchema);
module.exports = Housewives;