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

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

// app.get('/api/profile', function (req, res) {
//   db.Profile.find()

//     .exec(function(err, profiles){
//     if (err) {return console.log("index error: " + err);}
//     res.json(profiles);
//   });
// });



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
    woops_i_has_forgot_to_document_all_my_endpoints: false, // changed
    message: "Hey what's up hello!? Welcome to Sam's personal api.. here's what you need to know!",
    documentation_url: "https://github.com/samascher/express-personal-api", // Changed -- need to add documentation
    base_url: "https://cryptic-earth-48542.herokuapp.com/api", // Changed
endpoints: [
      {method: "GET", path: "/api", description: "all available endpoints"},
      {method: "GET", path: "/api/profile", description: "profile with my personal api data"}, 
      {method: "POST", path: "/api/housewives", description: "all housewives i like"}, 
      {method: "GET", path: "/api/housewives/", description: "get all housewives"},
      {method: "GET", path: "/api/housewives/:name", description: "get housewives by name"}
    ]

  });
});

app.get('/api/profile', function index(req, res) {
  db.Profile.find()
  .exec(function(err, profiles){
    if (err) {return console.log("index error: " + err);}
    res.json(profiles[0]);
  });
});

app.post('/api/housewives', function(req, res){
  // create in DB
  var newHousewives = db.Housewives({
    name: req.body.name,
    location: req.body.location,
    flaw: req.body.flaw, 
    status: req.body.status
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