var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');


var app = express();

app.set('view engine','ejs');

var multer  = require('multer')

var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
};

// var connection = mysql.createConnection({
//     host:'localhost',
//     user:'zoe',
//     password:'123456',
//     database:'tutor'
// });

var uploadFolder = './upload/';
createFolder(uploadFolder);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

var upload = multer({ storage: storage });


// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/',function(req,res){
    console.dir(req.query);
    res.send("home page!");
    // res.send("home page: " + req.query.find);
});

// app.get('/form',function(req,res){
//     var data = {age:20,hobbie:['eating','running']};
//     res.render('form',{data:data});
// });



app.post('/',urlencodedParser,function(req,res){
    console.dir(req.body);
    res.send(req.body.name);
});

app.post('/upload',upload.single('logo'),function(req,res){
    console.dir(req.file);
    res.send({'ret_code':0});
});

app.post('/upload',jsonParser,function(req,res){
    console.dir(req.body);
    res.send(req.body.name);
});


app.listen(3000);

console.log('listening 3000')

