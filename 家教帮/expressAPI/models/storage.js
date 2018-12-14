let OSS = require('ali-oss');
var fs = require('fs');
var con = require('./db').con;
var aliyun = require('./aliyun');
let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAILzRjytI5AIO8',
  accessKeySecret: 'VtwJkolPmWi0k3RvxKqtG5v1wMSBWm',
  bucket: 'tutor666',
});
 

async function put(path, filename, temfile) {
  try {
    let result = await client.put(path + filename, temfile);
    var url = result.url;//文件读取地址
   return new Promise((resolved)=>{
     resolved(url);
   })
  } catch (err) {
    console.log(err);
  }
}




exports.upload_head = async function (req, res, next) {
  console.log(req.files)
  var message = req.files[0];
  console.log('message'+message);
  var stu_id = message.fieldname;

  if (!message) {
    res.send({
      status: 1,
      info: 'error',
      message: 'error,未收到消息'
    })
  } else {
    if (!stu_id) {
      res.send({
        status: 1,
        info: 'error',
        message: '请输入学生ID'
      })
    }else{
    var filetype = message.mimetype.split('/')[1];//获取传上来的文件类型
    var timestamp=new Date().getTime();
    var file = timestamp + '.' + filetype; //自定义文件名
    var des_file = "./upload_tmp/" +timestamp+ file;
    await fs.rename(message.path, des_file)
    var url = await aliyun.aliyunPUT_head('head/', file, des_file);
      await con.query( 'UPDATE students SET head_src = ? WHERE stu_id = ?',[url,stu_id],(err,result)=>{
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
          headurl:url,
          info:'ok',
          message:'上传成功'
        })
    }
  }
}
