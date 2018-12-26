// var con = require('./db').con;

var con = require('../config/config').con;




// 创建订单
exports.order_set = function (req, res) {
    var stu_id = req.body.stu_id;
    var tea_id = req.body.tea_id;
    var order_time = req.body.order_time;
    var class_time = req.body. class_time;
    var order_address = req.body.order_address;
    var order_course = req.body.order_course;

    con.query('insert into order2(stu_id,tea_id,order_address,order_time,class_time,order_course)  values(?,?,?,?,?,?)',
        [stu_id,tea_id, order_address, order_time,class_time,order_course], (err, result) => {
            if (err) {
              
                res.send({
                    status: 1,
                    info: 'error2',
                    message: '数据库写入错误'
                   
                })
            }else{
                res.send({
                    status: 0,
                    info: 'OK',
                    message: '订单生成成功'
                })
            }
        })
}

// 查询订单

// 学生要查询的订单
exports.select_order_stu = function(req,res){
    var stu_id = req.query.stu_id;
    con.query('select students.stu_phone, teachers.tea_name,teachers.tea_sex,teachers.stu_grade,teachers.stu_courses,teachers.tea_school,teachers.tea_major,teachers.tea_grade, order_id,class_time,order_time,order_address,order_course from teachers,order2,students where teachers.tea_id = order2.tea_id and order2.stu_id=students.stu_id and students.stu_id =?',[stu_id], (err, result) => {
        if(err){
           
            res.send({
                status: 1,
                info: 'error2',
                message: '数据库读入错误'
               
            })
        }else{ 
            res.json(result);
        }
    })
}


exports.select_order_tea = function(req,res){
    var tea_id = req.query.tea_id;
    var select3 = 'select stu_name,stu_age,stu_sex,stu_grade,stu_phone,'
                +'order_id,class_time,order_time,order_address,order_course '
                +'from students,order2 where students.stu_id = order2.stu_id and tea_id =? '
    con.query(select3,[tea_id], (err, result) => {
        if(err){
           
            res.send({
                status: 1,
                info: 'error2',
                message: '数据库读入错误'
               
            })
        }else{
           
            res.json(result);
        }
    })
}

