var mysqli = require('mysql');
//database connection

var connection = mysqli.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prime_anc'
  });

    connection.connect((function (err) {
    if (err) {
      console.log('Error While Connecting');
      return;
    }
    console.log('Connected..');
  }));

 exports.connection = connection;