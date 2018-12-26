

let OSS = require('ali-oss');
const mysql = require('mysql'),
con = mysql.createConnection({
    host: '39.105.111.123',
    user: 'root',
    password: 'xingyun2016',
    database: 'tutor'
});
exports.con = con;


let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAILzRjytI5AIO8',
  accessKeySecret: 'VtwJkolPmWi0k3RvxKqtG5v1wMSBWm',
  bucket: 'tutor666',
});

// path为指定阿里云OSS的上传位置（记得加 ‘/’，例如 head/，filename为上传的文件命名，temfile为本地服务器存储位置）
// 本函数返回最后上传的文件url
exports.aliyunPUT_head = async function put(path, filename, temfile) {
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





let client2 = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAILzRjytI5AIO8',
  accessKeySecret: 'VtwJkolPmWi0k3RvxKqtG5v1wMSBWm',
  bucket: 'tutor-community',
});



exports.aliyunPUT_community = async function put(path, filename, temfile) {
  try {
    let result = await client2.put(path + filename, temfile);
    var url = result.url;//文件读取地址
   return new Promise((resolved)=>{
     resolved(url);
   })
  } catch (err) {
    console.log(err);
  }
}



let client3 = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAILzRjytI5AIO8',
  accessKeySecret: 'VtwJkolPmWi0k3RvxKqtG5v1wMSBWm',
  bucket: 'tutor-learn',
});



exports.aliyunPUT_learn = async function put(path, filename, temfile) {
  try {
    let result = await client3.put(path + filename, temfile);
    var url = result.url;//文件读取地址
   return new Promise((resolved)=>{
     resolved(url);
   })
  } catch (err) {
    console.log(err);
  }
}