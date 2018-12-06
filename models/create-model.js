var db = require('./db');

var validateUser = function(user, callback){

	var sql = "INSERT INTO emp VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)";
	var param = [user.name, user.gender,user.address,user.dept,user.email,user.password,user.cpassword,user.capital];
	db.insert(sql, param ,function(result){
		if(result == null || result.length == 0)
		{
			callback(false);
		}
		else
		{
			callback(true);
		}

	});
}

module.exports.validateUser = validateUser;
