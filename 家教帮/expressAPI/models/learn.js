// var con = require('./db').con;



var con = require('../config/config').con;

exports.file_download = function(req,res){
   var fileVerify = req.query.fileVerify;
   con.query('select * from learnFile where fileVerify = ?',[fileVerify],(err,result)=>{
       if(err){
        res.send({
            status: 0,
            info: 'error',
            message: '数据库错误'
          })
       }else{
           res.json(result);
       }
   })
   
}



exports.getNews = function(req,res){
    con.query('select * from learnNews',(err,result)=>{
        if(err){
         res.send({
             status: 0,
             info: 'error',
             message: '数据库错误'
           })
        }else{
            res.json(result);
        }
    })
    
 }


 exports.getvideos = function(req,res){
    con.query('select * from video', (err, result) => {
        if(err){
            res.send({
                status:1,
                info:'error',
                message:'服务器连接错误'
            })
        }else{
            if(result.length!=0){
                res.json(result);
        
            }
        }
       
    })
 }
