// Declaration
var express = require('express');
var router = express.Router();
var loginModel = require.main.require('./models/create-model');
// Request Handler
router.get('/', function(req, res){
	res.render('create/create');
});

router.post('/', function(req, res){
	//res.render('create/create');
	//res.send("posted");
	//console.log();
//	res.send(req.body.capital);
	
	var user = {
		name: req.body.name,
		gender: req.body.gender,
		address:req.body.address,
		dept: req.body.dept,
		email: req.body.email,
		password: req.body.password,
		cpassword:req.body.cpassword,
		capital:req.body.capital
	};

	loginModel.validateUser(user, function(result){
		res.redirect('/home');
	});

});


// Export (mandatory)
module.exports = router;