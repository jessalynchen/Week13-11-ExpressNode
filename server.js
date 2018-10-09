var express = require("express");
var bodyParser = require("body-parser");

var myApp = express();
var PORT = process.env.PORT || 8080;

myApp.use(bodyParser.urlencoded({ extended: true }));

myApp.use(bodyParser.json());

require("./app/routing/apiRoutes")(myApp);
require("./app/routing/htmlRoutes")(myApp);

app.listen(PORT, function() {
  console.log("I'm listening on port " + PORT);
});

//remember to npm i express