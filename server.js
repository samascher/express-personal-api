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
      {method: "GET", path: "/api/profile", description: "Profile with my personal api data"}, 
      {method: "POST", path: "/api/housewives", description: "all housewives i like"}, // CHANGE ME
      {method: "GET", path: "/api/housewives/", description: "get all housewives"},
      {method: "GET", path: "/api/housewives/:name", description: "get housewives by name"}
    ]

  });
});

app.get('/api/profile', function index(req, res) {
  db.Profile.find()
  .exec(function(err, profiles){
    if (err) {return console.log("index error: " + err);}
    res.json(profiles);
  });
});

app.post('/api/housewives', function(req, res){
  // create in DB
  var newHousewives = db.Housewives({
    name: req.body.name,
    height: req.body.height,
    climbed: req.body.climbed, 
    Skiied: req.body.Skiied

  });
  // Save to DB
  newHousewives.save(function(err, housewives){
    if(err){
      return console.log("Error saving: " + err);
    }
    console.log("Saved: " + housewives);
    res.json(housewives);
  });

});

app.get('/api/housewives', function index(req, res) {
  db.Housewives.find()
  .exec(function(err, housewives){
    if (err) {return console.log("index error: " + err);}
    res.json(housewives);
  });
});

// get housewives by name 
app.get('/api/housewives/:name', function(req, res){
  db.Housewives.findOne({name: req.params.name}, function(err, data){
    if(err){
      return console.log("Search Error: " + err);
    }
    res.json(data);
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
