const { Router } = require('express');
var express = require('express');
var router = express.Router();
var database = require('../database');


router.get("/", function(request, response, next){

	var query = "SELECT * FROM sampledata ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('website');
		}

	});

});





module.exports = router;
