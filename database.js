const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    database:'guruform',
    user:'root',
    password:''
});

// connection.connect(function(error){
//     if(error)
//     {
// throw error;
//     }
//     else{
//         console.log('MYsql database is connected');
        
//     }
// });

module.exports = connection;