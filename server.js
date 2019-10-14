const express = require('express');
const path = require('path');

let PORT = process.env.PORT || 8080;

let app = express();
app.use(express.static(path.join(__dirname, 'app/public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/htmlroutes.js')(app);
require('./app/routing/apiroutes.js')(app);


app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT);
});