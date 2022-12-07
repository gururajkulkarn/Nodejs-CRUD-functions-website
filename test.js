
var database = require('./database');
database.connect(function(err) {

if (err) throw err;
console.log("Connected!");
//Make SQL statement:
var sql = "INSERT INTO student (firstname, lastname) VALUES ?";
//Make an array of values:
var values = [
['John', 'Highway 71'],

['Peter', 'Lowstreet 4'],

['Amy', 'Apple st 652'],

['Hannah', 'Mountain 21'],

['Michael', 'Valley 345']

];

//Execute the SQL statement, with the value array:
database.query(sql, [values], function (err, result) {
if (err) throw err;
console.log("Number of records inserted: " + result.affectedRows);
});
});