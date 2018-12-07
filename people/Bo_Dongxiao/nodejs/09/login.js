/**
 * Created by linziyu on 2017/7/8.
 */
/**
 * express接收html传递的参数
 */
 
var  express=require('express');
var  app=express();
var mysql=require('mysql');
 
/**
 * 配置MySql
 */
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'tutor_database',
    port:'3306'
});
connection.connect();
app.get('/',function (req,res) {
    res.sendfile(__dirname + "/" + "index.html" );
})
 
/**
 * 实现登录验证功能
 */
app.get('/login',function (req,res) {
    var  name=req.query.name;
    var password=req.query.password;
 
    var selectSQL = "select * from login where name = '"+name+"' and password = '"+password+"'";
    connection.query(selectSQL,function (err,rs) {
        if (err) throw  err;
        console.log(rs);
        console.log('OK');
        res.sendfile(__dirname + "/" + "OK.html" );
    })
})
 
app.get('/register.html',function (req,res) {
    res.sendfile(__dirname+"/"+"register.html");
})
 
/**
 * 实现注册功能
 */
app.get('/register',function (req,res) {
    var  name=req.query.name;
    var  password=req.query.password;
    var  user={name:name,password:password};
    connection.query('insert into login set ?',user,function (err,rs) {
        if (err) throw  err;
        console.log('ok');
        res.sendfile(__dirname + "/" + "index.html" );
    })
})
 
 
 
 
var  server=app.listen(3000,function () {
    console.log("start");
})
