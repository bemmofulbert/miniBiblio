var mysql = require('mysql');

const info = {
    user : "root",
    password : "",
    host : "localhost",//"192.168.43.10",
    database : "miniBiblio"
}

var connection = mysql.createConnection(info);

connection.connect(function(err) {
  if (err) {
    throw err;
    console.error('error connecting to mysql db: ' + err.stack);
    return;
  }

  const dbPhrase =  'mysql://'+info.user+":"+info.password+"@"+info.host+"/"+info.database;
  console.log('connected as id ' + connection.threadId + " to "+ dbPhrase);
});

module.exports = connection
