var express = require('express');

var router = express.Router();

var database = require('../database');


//SAMPLE DATA FROM DATABASE GET METHOD
router.get("/", function (request, response, next) {

	var query = "SELECT * FROM sampledata ORDER BY id DESC";

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		}
		else {
			response.render('sampledata', { title: 'Node.js MySQL CRUD Application', action: 'list', sampleData: data });
		}

	});

});



//ADD METHOD
router.get("/add", function (request, response, next) {

	response.render("sampledata", { title: 'Insert Data into MySQL', action: 'add' });

});

router.post("/add_sample_data", function (request, response, next) {

	var firstname = request.body.firstname;

	var lastname = request.body.lastname;
	var district = request.body.district;
	var state = request.body.state;
	var id = request.params.id;

	var query = `
	INSERT INTO sampledata 
	(firstname, lastname,district,state) 
	VALUES ("${firstname}","${lastname}", "${district}", "${state}")
	`;

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		}
		else {

			response.redirect("/sampledata");
		}

	});

});


//EDIT METHOD

router.get('/edit/:id', function (request, response, next) {

	var id = request.params.id;

	var query = `SELECT * FROM sampledata WHERE id = "${id}"`;

	database.query(query, function (error, data) {

		response.render('sampledata', { title: 'Edit MySQL Table Data', action: 'edit', sampleData: data[0] });

	});

});

router.post('/edit/:id', function (request, response, next) {


	var firstname = request.body.firstname;
	var lastname = request.body.lastname;
	var district = request.body.district;
	var state = request.body.state;
	var id = request.params.id;

	var query = `
	UPDATE sampledata 
	SET firstname = "${firstname}", 
	lastname = "${lastname}",
	district = "${district}",
	state = "${state}"
	WHERE id = "${id}"
	`;

	database.query(query, function (error, data) {

		if (error) {

			throw error;
		}
		else {

			response.redirect('/sampledata');
		}

	});

});



//DELETE METHOD
router.get('/delete/:id', function (request, response, next) {

	var id = request.params.id;

	var query = `DELETE FROM sampledata WHERE id = "${id}"`;

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		}
		else {

			response.redirect("/sampledata");
		}

	});

});

module.exports = router;