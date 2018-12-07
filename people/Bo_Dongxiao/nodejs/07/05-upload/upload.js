var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var multer  = require('multer')


var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
};


var uploadFolder = './uploads/';
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


app.post('/upload',upload.single('logo'),function(req,res){
    console.dir(req.file);
    res.send('sucess');
});

app.post('/upload',jsonParser,function(req,res){
    console.dir(req.body);
    res.send(req.body.name);
});


app.listen(3000);

console.log('listening 3000')

