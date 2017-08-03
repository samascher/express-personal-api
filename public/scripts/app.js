console.log("Sanity Check: JS is working!");

$(document).ready(function(){

// your code
  $.get("api/profile", function(profile){
    profile.forEach(function(profile){
      console.log(profile);
    });
  });

});
var ProfileData = "";

//  NEED TO APPEND TO THE WEBPAGE //
$("#Profile").append(ProfileData);