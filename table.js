var mysql = require('mysql');
var database = require('./database');

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, product VARCHAR(255), quantity VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });