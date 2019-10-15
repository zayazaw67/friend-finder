const path = require("path");

module.exports = function (app) {
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
    // supposed to send to home if any an unspecified route is entered, but wouldn't go to /api/friends this way
    //   app.get("*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "/../public/home.html"));

