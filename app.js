// Declaration
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var home = require('./controllers/home');
var create = require('./controllers/create');

var port = 1337;

// Configure
app.set('view engine', 'ejs');

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));

// Route
//app.get('/', function(req, res){
	//res.redirect('/login');
///});

app.use('/home', home);
app.use('/create', create);


// Server startup
app.listen(port, function(){
	console.log('Server started at port ' + port);
});