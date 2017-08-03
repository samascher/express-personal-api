// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var new_profile = [
	{
		name: "Sam Ascher",
		github_link: "https://github.com/samascher",
		current_city: "Denver",	
	}
];

var new_housewife = [
	{
		name: "Kyle Richards",
		location: "Beverly Hills",
		flaw: "Two-faced",
		status: "Active",
	},	{
		name: "Joanna Krupa",
		location: "Miami",
		flaw: "Kind of crazy",
		status: "Inactive",
	},
	{
	    name: "Dorinda",
	    location: "New York City",
	    flaw: "Slurring, crazy drunk",
	    status: "active"
	  },
	  {
	    name: "Tamra",
	    location: "Orange County",
	    flaw: "Anger issues",
	    status: "active"
	  },
	  {    
	    name: "Mama Elsa",
	    location: "Miami",
	    flaw: "botched plastic surgeries",
	    status: "deceased"
	  },
	  {
	    name: "Lisa Vanderpump",
	    location: "Beverly Hills",
	    flaw: "Stuck-up old bitch",
	    status: "active"
	  }
];

db.Profile.remove({}, function(err, profiles){
	console.log("Removed all profiles");
	db.Profile.create(new_profile, function(err, profiles){
		if(err){
			return console.log("Error: " + err);
		}
		console.log("created the profile: " + profiles);
	});
});


db.Housewife.remove({}, function(err, mountains){
	console.log("Removed all housewives");
	db.Housewife.create(new_housewife, function(err, housewife){
		if(err){
			return console.log("Error: " + err);
		}
		console.log("created the housewife: " + housewife);
	});
});