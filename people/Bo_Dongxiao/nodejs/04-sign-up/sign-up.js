var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'tutor_database',
    port:'3306'
});


var querystring = require('querystring');
var alldata = '';
var datastring = alldata.toString();
var obj = querystring.parse(datastring);
var server = http.createServer(function(req,res){
    alldata = '';
    req.on('data',function(chunk){
        alldata+=chunk;
    })
});



var selectsql = 'SELECT * FROM login';
var selectsqlParams = [obj.user,obj.pw];

connection.query(selectsql,selectsqlParams,function (err, result) {
    // if(err){
    //   console.log('[SELECT ERROR] - ',err.message);
    //   return;
    // }

   console.log(result);
});


console.log('listening 3000')
server.listen(3000);