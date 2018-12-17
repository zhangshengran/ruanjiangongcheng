var con = require('./db').con;
var aliyun = require('./aliyun');
var fs = require('fs');
exports.writeNote = async function (req, res, next) { 

  console.log(req.files)
  var message = req.files[0];
  console.log(message);

    var poster_id = message.fieldname;
    var content = message.originalname;

    if(!content && req.files.length == 0){
      res.send({
        status:1,
        info:'error',
        message:'发帖失败，请至少输入一句话或插入一个图片'
      })
    }else{
      if(req.files.length!=0){
        var filetype = message.mimetype.split('/')[1];//获得上传文件类型
      var timestamp=new Date().getTime();//时间戳
      var file =timestamp+ '.' + filetype; //自定义文件名
     
      var des_file = "./upload_tmp/" + file;
      
      await fs.rename(message.path, des_file)
  
      var img_src1 = await aliyun.aliyunPUT_community('community/', file, des_file);
      await con.query( 'insert into community(poster_id,content,img_src1) values(?,?,?)',[poster_id,content,img_src1],(err,result)=>{
        if(err){
          res.send({
            status:1,
            info:'error',
            message:'数据库错误'
          })
        }
      });
 
        res.send({
          status:0,
          info:'ok',
          message:'成功'
        })
      }else{
        await con.query( 'insert into community(poster_id,content) values(?,?)',[poster_id,content],(err,result)=>{
          if(err){
            res.send({
              status:1,
              info:'error',
              message:'数据库错误'
            })
          }
        });
          res.send({
            status:0,
            info:'ok',
            message:'成功'
          })
      }
      
    }
  
  }
  
exports.getOwnNotes = function(req,res){
    var stu_id = req.query.stu_id;
    // var slequery = 'select'+
    // 'content,img_src1,'+
    // ''

    con.query('select content,img_src1,stu_name,head_src from students,community where students.stu_id=community.poster_id and students.stu_id=?',[stu_id],(err,result)=>{
      if(err){
        
        res.send({
          status:1,
          info:'error',
          message:'数据库错误'
        })
      }else{
        res.json(result);
      }
    })
}


exports.getAllNotes = function(req,res){
  con.query('select content,img_src1,stu_name,head_src from students,community where students.stu_id=community.poster_id',(err,result)=>{
    if(err){
      res.send({
        status:1,
        info:'error',
        message:'数据库错误'
      })
    }else{
      res.json(result);
    }
  })
}