

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//注册接口
router.post('/login', function(req, res, next) {
  var phone = req.body.phone;
  var password = req.body.password;
  var mysql = require('mysql');
  // var _row = row;
  //配置连接
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'tutor_database'
  });
  //输入验证

  //手机号判空
  if(!phone || phone == "") {
    console.log("手机号不能为空");
    res.send('手机号不能为空');
    return;
  }
  //正则表达式判断手机号是否正确
  var isphone = /0?(13|14|15|18)[0-9]{9}/ ;
  if(phone != "" && !isphone.test(phone)) {
    console.log("请输入正确的手机号");
    res.send('请输入正确的手机号');
    return;
  }
  //密码判空
  if(!password || password == "") {
    console.log("密码不能为空");
    res.send('密码不能为空');
    return;
  }
  
  // connection.connect();
  //手机号查重，若重复不能注册
  connection.query('SELECT * FROM login_new', function(err, row) {
    if(err) throw err;
    var isTrue = false;
    if(row){ //获取用户列表，循环遍历判断当前用户是否存在
      for (var i=0;i<row.length;i++) {
          if(row[i].phone == phone) {
              isTrue = true;
          }
      }
  }
  
  var data = {};
  data.isTrue = !isTrue;//isTrue为true成功，false失败
  if(isTrue){
    console.log("用户已存在");//登陆成功返回用户信息
    res.send('用户已存在');
  }else{
    connection.query('INSERT INTO login_new(phone,password) VALUES(?,?)',[phone,password],function(err,result){
      if(err) throw err;
      console.log("注册成功");
      res.send('注册成功');
    })
  }

  });
  //关闭连接
  // connection.end();
});

