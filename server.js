// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/************
 * DATABASE *
 ************/

var db = require('./models');

/******************
Some hardcoded data
******************/

var profile = {
  id: _1,
  name: "Sam Ascher",
  current_city: "Denver",
  github_link: "https://github.com/samascher",
  github_profile_image: "https://github.com/account",
  favorite_drinks: [
    {
      name: "riesling",
      type: "wine",
      temperature: "cold"
    },
    {
      name: "sauvignon blanc",
      type: "wine",
      temperature: "very cold"
    },
    {
      name: "lemonade",
      type: "flavored water",
      temperature: "semi-cold"
    },
    {
      name: "la croix cran-raspberry",
      type: "sparkling water",
      temperature: "room-temp",
    },
  ]
};

var realHousewives = [
  {
    id: _1,
    name: "Dorinda",
    location: "New York City",
    flaw: "Slurring, crazy drunk",
    number_of_husbands: 2,
    current_status: "active"
  },
  {
      id: _2,
    name: "Tamra",
    location: "Orange County",
    flaw: "Anger issues",
    number_of_husbands: 2,
    current_status: "active"
  },
  {    
    id: _3,
    name: "Mama Elsa",
    location: "Miami",
    flaw: "botched plastic surgeries",
    number_of_husbands: 3,
    current_status: "deceased"
  },
  {
    id: _4,
    name: "Lisa Vanderpump",
    location: "Beverly Hills",
    flaw: "Stuck-up old bitch",
    number_of_husbands: 1,
    current_status: "active"
  }
],

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    woops_i_has_forgot_to_document_all_my_endpoints: true, // CHANGE ME ;)
    message: "Hey what's up hello!? Welcome to Sam's personal api.. here's what you need to know!",
    documentation_url: "https://github.com/samascher/express-personal-api", // Changed -- need to add documentation
    base_url: "https://pacific-scrubland-15691.herokuapp.com/", // Changed
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Some basic information about me!"},
      {method: "POST", path: "/api/campsites", description: "My favorite Real Housewives"}
    ]
  });
});

app.get('/api/profile', function (req, res){
  db.Profile.find({}, function (err, profile){
    res.json(profile);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
