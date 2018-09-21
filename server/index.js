const express = require('express');
const bodyParser = require('body-parser');

const Port = 4444;

// Creates a server
const App = express();

// Ensures parsing 
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: true}));

// Serves static files from this path
App.use(express.static('static'));

// Starts the server
App.listen(Port, () => console.log('Server is running on port', Port));