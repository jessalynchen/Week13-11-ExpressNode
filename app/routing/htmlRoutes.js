var path = require("path");
module.exports = function(app) {
  myApp.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  mApp.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
