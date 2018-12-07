var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//登录接口
router.post('/login', function(req, res, next) {
  var name = req.body.username;
  var password = req.body.password;
  var mysql = require('mysql');
  //配置连接
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'tutor_database'
  });
  //输入验证
  if(!name || name == "") {
    console.log("用户名不能为空");
    res.send('用户名不能为空');
    return;
  }
  if(!password || password == "") {
    console.log("密码不能为空");
    res.send('密码不能为空');
    return;
  }
  
  connection.connect();
  connection.query('SELECT COUNT(*) checkNum FROM `login_new` WHERE name = \''+name+'\' AND password =\''+ password +'\'', function(err, rows, fields) {
    if (err) throw err;
    var checkNum = rows[0].checkNum;
    console.log('结果为: ', rows[0].checkNum);
    if(checkNum == 0){
      console.log('账号或密码不正确');
      res.send('账号或密码不正确');
    }else{
      console.log('登录成功');
      //返回结果
      res.send('登录成功，账号密码为：'+name+"---"+password);
    }
  });
  //关闭连接
  connection.end();
});

