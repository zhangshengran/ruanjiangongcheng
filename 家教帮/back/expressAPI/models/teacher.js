const mysql = require('mysql'),
    con = mysql.createConnection({
        host: '39.105.111.123',
        user: 'root',
        password: 'xingyun2016',
        database: 'tutor'
    });

    
// 成为老师
exports.register_tea =function (req, res) {
    console.log(req.body);
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
    con.query('insert into teachers(tea_name,tea_age,tea_sex,tea_email,stu_grade,stu_courses,tea_school,tea_major,tea_grade,userID,remark) values(?,?,?,?,?,?,?,?,?,?,?)',
    [tea_name,tea_age,tea_sex,tea_email,stu_grade,stu_courses,tea_school,tea_major,tea_grade,userID,remark], (err, result) => {
        if (err) {
            res.send({
                status  : 1,
                info    : 'error',
                message:'数据库连接错误'
            });
        } else {
            res.send({
                status  : 0,
                info    : 'ok'
            });
        }
    });
   
}
