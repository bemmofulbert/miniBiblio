var mysql = require('mysql');

/*const info = {
    user : "root",
    password : "",
    host : "localhost",
    database : "miniBiblio"
}*/
const info = {
    user : "sql8661163",
    password : "UYSxVDW42Y",
    host : "sql8.freemysqlhosting.net",
    database : "sql8661163"
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
