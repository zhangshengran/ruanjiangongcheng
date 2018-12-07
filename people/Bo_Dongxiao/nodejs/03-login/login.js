// var express = require('express');
// var app = express();
var http = require('http');

var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'tutor_database',
    port:'3306'
});


//从页面上获取信息
var querystring = require('querystring');
var alldata = '';
var datastring = alldata.toString();
var obj = querystring.parse(datastring);
var server = http.createServer(function(req,res){
    alldata = '';
    req.on('data',function(chunk){
        alldata+=chunk;
    })


    
        
    //将从页面上获取的信息添加到数据库中
        var addsql = 'INSERT INTO login_new(name,password) VALUES(?,?)';
        var addsqlParams = [obj.user,obj.pw];
        
        connection.query(addsql,addsqlParams,function (err,result){
        // if(err){
        //     console.log('[INSERT ERROR] - ',err.message);
        //     return;
        // }        
            
        console.log('INSERT ID:',result);   
            
    
        });


        //结束页面
        req.on('end',function(){
        datastring = alldata.toString();
        obj = querystring.parse(datastring);
        console.log(obj.user);
        console.log(obj.pw);
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('成功');
    })
})


console.log('listening 3000')
// app.listen(3000);
server.listen(3000);