var express = require('express');
var router = express.Router();
var express = require('express');
var router = express.Router();
var session = require('express-session');
var FileStore = require('session-file-store')(session);
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('index.html')
  console.log( req.session);
  res.type('html');
  res.render('login');
});

 



router.post('/',(req, res, next)=>{
  var username = req.body.username;
  var password = req.body.password;
  console.log(req.body)

  if(username == 'admin' && password == 'admin'){
    req.session.username = username; // 登录成功，设置 session
    console.log( req.session);
    res.redirect('/home');
  }
  else {
 
    res.send({
      status:1,
      message:'登陆失败'
    })
        // res.json({ ret_code: 1, ret_msg: '账号或密码错误' });// 若登录失败，重定向到登录页面
        // res.redirect('/');
      }
})



/* GET home page. */
router.get('/home', function(req, res, next) {
  console.log(req.session);
  if(req.session.username){  //判断session 状态，如果有效，则返回主页，否则转到登录页面
    res.type('html');
    res.render('home',{username : req.session.username});
    
    // res.render('home', { title: 'home' , user:{name:"张胜然"}});
}else{
    res.redirect('/');
}
    // res.render('home', { title: 'home' , user:{name:"张胜然"}});
  });
  

router.all('/logout',function (req,res,next) {

    //销毁session

req.session.destroy(function(err){

    if(err){
        console.log(err);
    }else{
        res.redirect('/');
    }
})

});
module.exports = router; 