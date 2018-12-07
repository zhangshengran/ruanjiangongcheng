var express = require('express')
var mysql = require('mysql')
var app = express();


var mysql = require('mysql');
var connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'tutor_database',
    port:'3306'
});

app.post('/login.html',function(req,res){
    var postData = "";
    req.addListener("data",function(postDataChunk){
        postData += postDataChunk;
    });
    req.addListener("end",function(){
        console.log("数据接收完毕！");
        var json = qs.parse(postData);
        nextId +=1;
        console.log('nextId：'+nextId);
        var  userAddSql = "INSERT INTO `login` (`id`,`name`, `password`) VALUES ('"+nextId+"','"+json.name+"','"+json.password+"')";
        connect.query(userAddSql,function (err,mysqldata) {
            if(err) throw err;
            console.log('数据存入成功！');
        });
        fs.readFile('login.html',function(err,data){
            if(err){
                throw err;
            }else{
                res.end(data);
            }
        });
        res.setHeader('Content-Type','text/html');
    });
});
var  userAddSql_Params = "SELECT * FROM login";

connect.query(userAddSql_Params, function(err, rows) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
        var list = {
            id : rows[i].id,
            name : rows[i].name,
            password : rows[i].password
        };
        arr[i] = list;
    }
    idnum();
});

function idnum(){
    var arr2=[];
    for(var i = 0;i<arr.length;i++){
        arr2[i]=arr[i].id;
    }
    arr2.sort(function(a,b){return b-a});
    console.log('数据输出。。。');
    nextId=arr2[0]+1;
}