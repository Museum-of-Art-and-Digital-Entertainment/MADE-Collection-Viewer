const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./models");
const controllers = require("./controllers");
//passport
const passport = require('passport');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

//passport
require('./config/passport')(passport);
app.use(session({ secret: 'shhsecret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/GameCollection",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
