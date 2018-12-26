var aliyun = require('../config/config');
var con = require('../config/config').con;


exports.getStu = function(req,res){
    con.query('select * from students',(err,result)=>{
        if(err){
            res.send(
                {
                    status:1,
                    message:'数据库错误'
                }
            )
        }else{
            res.json(result);
        }
    })
}
exports.deStu = function(req,res){
    var stu_id = req.query.stu_id;


    con.query('delete from students where stu_id = ?', [stu_id], (err, result) => {
        if (err) {
            res.send(
                {
                    status:1,
                    message:'数据库错误'
                }
            )
        }else
        { res.send(
            {
                status:0,
                info:'ok',
                message:'删除成功'
            }
        )}
    });

}

exports.showOrders = function(req,res){
    con.query('select * from order2',(err,result)=>{
        if(err){
            res.send(
                {
                    status:1,
                    message:'数据库错误'
                }
            )
        }else{
            res.json(result);
        }
    })
}

