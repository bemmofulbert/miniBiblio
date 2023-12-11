var mysql = require('mysql');

//const info = {
//    user : "root",
//    password : "",
//    host : "localhost",
//    database : "miniBiblio"
//}
const info = {
     user : "avnadmin",
     password : "AVNS_k6b76hWilWD9Cw6FPCv",
     host : "minibiblio-fbemmo-b973.a.aivencloud.com",
     database : "defaultdb",
     port: 16756
}

var connection = mysql.createConnection(info);

connection.connect(function(err) {
  const dbPhrase =  'mysql://'+info.user+":"+info.password+"@"+info.host+":"+info.port+"/"+info.database+"?ssl-mode=REQUIRED";
  if (err) {
    throw err;
    console.error('dbPhrase\nerror connecting to mysql db: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId + " to "+ dbPhrase);
});

module.exports = connection
