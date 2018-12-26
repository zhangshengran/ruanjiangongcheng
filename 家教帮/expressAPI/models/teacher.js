// var con = require('./db').con;


var con = require('../config/config').con;


// 成为老师
exports.register_tea = function (req, res) {
    console.log(req.body)
    var tea_name = req.body.tea_name;
    var tea_age = req.body.tea_age;
    var tea_sex = req.body.tea_sex;
    var tea_email = req.body.tea_email;
    var stu_grade = req.body.stu_grade;
    var stu_courses = req.body.stu_courses;
    var tea_school = req.body.tea_school;
    var tea_major = req.body.tea_major;
    var tea_grade = req.body.tea_grade;
    var userID = req.body.userID;
    var remark = req.body.remark;
    var tea_money = req.body.tea_money;
    var stu_token = req.body.stu_token;
    con.query('insert into teachers(tea_name,tea_age,tea_sex,tea_email,stu_grade,stu_courses,tea_school,tea_major,tea_grade,userID,remark,tea_money) values(?,?,?,?,?,?,?,?,?,?,?,?)',
        [tea_name, tea_age, tea_sex, tea_email, stu_grade, stu_courses, tea_school, tea_major, tea_grade, userID, remark,tea_money], (err, result) => {
            if (err) {
                res.send({
                    status: 1,
                    info: 'error',
                    message: '数据库连接错误1'
                });
            } else {
                con.query('select tea_id from teachers where userID=?', [userID], (err, result) => {
                    if (err) {
                        res.send({
                            status: 1,
                            info: 'error',
                            message: '数据库连接错误2'
                        })
                    } else {
                        var tea_id = result[0].tea_id;
                        con.query('UPDATE students SET is_tea_ID = ? WHERE stu_id = ? ', [tea_id, stu_token], (err, result) => {

                            res.send({
                                status: 0,
                                info: 'ok',
                                tea_token: tea_id,
                                message: "注册老师成功"
                            });
                        })
                    }




                })

            }
        });

}
exports.select_tea = function (req, res) {


    con.query('select teachers.*,students.head_src from teachers,students where teachers.tea_id = students.is_tea_ID', (err, result) => {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '服务器连接错误'
            })
        } else {
            if (result.length != 0) {
                res.json(result);

            }
            else {
                res.send({
                    status: 1,
                    info: 'error',
                    message: '数据库还未注册过老师'
                })
            }
        }


    })
}


// 老师更新信息
exports.completed = function (req, res) {
    var tea_id = req.body.tea_id;
    var tea_name = req.body.tea_name;
    var tea_age = req.body.tea_age;
    var tea_sex = req.body.tea_sex;
    var tea_email = req.body.tea_email;
    var stu_grade = req.body.stu_grade;
    var stu_courses = req.body.stu_courses;
    var tea_school = req.body.tea_school;
    var tea_major = req.body.tea_major;
    var tea_grade = req.body.tea_grade;
    var remark = req.body.remark;
    var tea_money = req.body.tea_money;
    dbstr = 'UPDATE teachers'+
    ' set tea_name = ?,tea_age = ?,tea_sex= ?,tea_email = ?,stu_grade = ?,stu_courses = ?,tea_school=?,tea_major=?,tea_grade =?,remark=?,tea_money=?'+
    ' WHERE tea_id = ?'
    con.query(dbstr, [tea_name, tea_age, tea_sex, tea_email, stu_grade,stu_courses,tea_school,tea_major,tea_grade,remark,tea_money,tea_id], (err, result) => {
        if (err) {
            
            res.send({
                status: 1,
                info: 'error',
                message: '数据库错误，未能更新资料'
            })
        } else {
            res.send({
                status: 0,
                info: 'or',
                message: '更新成功'
            })
        }
    })
}

exports.showdata = function(req,res){
    var tea_id = req.query.tea_id;
    con.query('select * from teachers where tea_id = ?',[tea_id],(err,result)=>{
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

exports.search = function(req,res){

    var search_txt = req.query.search_txt;
  
            var sql = 'select  teachers.*, students.head_src from teachers,students where teachers.tea_id=students.is_tea_ID and teachers.stu_grade like '+con.escape("%"+search_txt+"%") + 'or  teachers.tea_name like '+con.escape("%"+search_txt+"%")+' or teachers.stu_courses like '+con.escape("%"+search_txt+"%")+ 'group by teachers.tea_id'
            con.query(sql,[search_txt,search_txt,search_txt],function(err,result){
    if (err) {
      res.send({
        status: 1,
        info:   'error',
        message:'系统错误'
      });
  
    }else{

      res.json(result);
    }
  });
  };


 