var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8008;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(error) {
  if (error){
    console.log(error);
  } else {
    console.log("Listen on Port " + PORT);
  }
});

//remember to npm i express