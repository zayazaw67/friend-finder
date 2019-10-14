const express = require("express");
const path = require("path");

let PORT = process.env.PORT || 8080;

let app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("/app/public"));
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });