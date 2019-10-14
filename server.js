const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static("public"));
require("./app/routing/htmlRoutes.js")(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });