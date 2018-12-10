var con = require('./db').con;

exports.select_video = function (req, res) {
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
