var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var student = require('./models/student');
var teacher = require('./models/teacher');
var video = require('./models/video');
var order = require('./models/order');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var app = express();
app.use(require('body-parser')())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({
  secret: 'secret', // 对session id 相关的cookie 进行签名 
  resave: true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie: {
    maxAge: 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
  },
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);

//API -----------------------------------------------------------------
// 老师接口
app.post('/register_tea',teacher.register_tea);
app.get('/select_tea',teacher.select_tea);

// 学生接口
app.post('/register_stu',student.register_stu);
app.get('/verify',student.verify);  
app.post('/login',student.select_stu);

// 视频接口
app.get('/select_video',video.select_video);  



//API -----------------------------------------------------------------
// 订单
app.post('/order_set',order.order_set);  
app.get('/select_order_stu',order.select_order_stu)
app.get('/select_order_tea',order.select_order_tea)

// ---------------------------------------------------------------------------




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
