var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var student = require('./models/student');
var teacher = require('./models/teacher');
var video = require('./models/video');
var order = require('./models/order');
var forget = require('./models/forget');
var community = require('./models/community');
var learn = require('./models/learn');


var learn2 = require('./backAPI/learn');
var common = require('./backAPI/common');






var session = require('express-session');
var FileStore = require('session-file-store')(session);
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'upload_tmp/' });
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
app.use('/', loginRouter);
app.use('/back', express.static('dist'))
app.use('/users', usersRouter);

//API -----------------------------------------------------------------
// 老师接口
app.post('/register_tea', teacher.register_tea);
app.get('/select_tea', teacher.select_tea);
app.post('/updata_tea', teacher.completed);
app.get('/showdata_tea', teacher.showdata);
app.get('/search', teacher.search);
// 学生接口
app.post('/register_stu', student.register_stu);
app.get('/verify', student.verify);
app.post('/login', student.select_stu);
app.post('/updata_stu', student.completed);
app.get('/showdata_stu', student.showdata);
app.post('/upload_head', upload.any(), student.upload_head);//用户头像更新
//忘记密码-----------------------------------------------------------------
app.get('/findVerify', forget.findVerify);
app.post('/forget', forget.forget);
//API -----------------------------------------------------------------
// 订单
app.post('/order_set', order.order_set);
app.get('/select_order_stu', order.select_order_stu)
app.get('/select_order_tea', order.select_order_tea)

// ---------------------------------------------------------------------------
// 文件上传

// 学习圈模块
app.get('/video', learn.getvideos);
app.get('/news', learn.getNews);
app.get('/learnFile', learn.file_download);

// 社区
// 写帖子
app.post('/writeNote', upload.any(), community.writeNote);
// 获得所有帖子
app.get('/getAllNotes', community.getAllNotes);
// 得到自己发的所有帖子
app.get('/getOwnNotes', community.getOwnNotes);

app.post('/advise',forget.postadvise);
app.get('/advise',forget.getadvise);

// backAPI------------------------------------------------

app.get('/getStu', common.getStu);
app.get('/deStu', common.deStu);
app.get('/showOrders', common.showOrders);
app.get('/deVideo', learn2.deVideo);
app.post('/writeNew', upload.any(), learn2.writeNew);
app.post('/createVideo', upload.any(), learn2.createVideo);
app.post('/upLearnFile', upload.any(), learn2.upLearnFile);
app.get('/delLearnFile', learn2.delLearnFile);
app.get('/delposter', learn2.delposter);
app.get('/delNews', learn2.delNews);





// -------------------------------------------
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
