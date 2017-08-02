var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = new Schema ({
  name: String,
  github_link: String,
  current_city: String,
});

console.log("ProfileSchema");

var Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;