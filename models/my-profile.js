var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MyProfileSchema = new Schema ({
  _id: Number, 
  name: String,
  github_link: String,
  github_profile_image: String,
  current_city: String,
  favorite_drinks: [String]
});

var MyProfile = mongoose.model("Profile", MyProfileSchema);

module.exports = MyProfile;