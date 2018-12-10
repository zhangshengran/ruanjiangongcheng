var request = require('request');
var querystring = require('querystring');

var con = require('./db').con;

// 验证码接口
exports.verify = function(req,res){
    console.log(req.query);
    var stu_phone = req.query.stu_phone;//获得请求的手机号
    var tpl_value = Math.round(Math.random()*10*10*10*10*10)//获得随机5位验证码

    console.log(stu_phone)

    var queryData = querystring.stringify({
        "mobile": stu_phone,  // 接受短信的用户手机号码
        "tpl_id": "119441",  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": "#code#="+tpl_value,  // 您设置的模板变量，根据实际情况修改
        "key": "3fd6da67a69d793673fc069c1cbb8868",  // 应用APPKEY(应用详细页查询)
    });
  
    var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;
    
    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) { 
            // console.log(body) // 打印接口返回内容      
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容 
            console.log(jsonObj);
            if(jsonObj.error_code !== 0)
            {
                res.send({
                    status:1,
                    message:jsonObj.reason
                });
            }else{
                res.send({
                    status:0,
                    tpl_value,
                    message:jsonObj.reason
                });
            }
        } else {
            res.send({
                status:1,
                message:'请求失败'
            });
        }
    }) 
}


// 学生注册接口
exports.register_stu = function (req, res) {
    // console.log(req);
    console.log(req.body);
    
    // console.log(req.headers);
   
    var stu_phone = req.body.stu_phone;
    var stu_password = req.body.stu_password;
    console.log("获得的账号"+stu_phone,"获得的密码"+stu_password);
    con.query('insert into students(stu_phone,stu_password) values(?,?)',
    [stu_phone, stu_password], (err, result) => {
        if (err) {
            res.send({
                status  : 1,
                info    : 'error',
                message:'注册失败' 
            });
           
        } else {
            res.send({
                status  : 0,
                info    : 'OK',
                message:'注册成功'
            });
        }
    });

}




// 学生登录
exports.select_stu = function (req, res) {
    var stu_phone = req.body.stu_phone;
    var stu_password = req.body.stu_password;

    con.query('select stu_password,stu_id,is_tea_ID from students where stu_phone = ?', [stu_phone], (err, result) => {

        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '数据库连接失败'
            })
        } else {
            if (result.length == 0) {
                res.send({
                    status: 1,
                    info: 'error',
                    message: '此账号不存在'
                })
            }
            else {
                console.log('数据库查到的ID' + result[0].stu_id);
                console.log('数据库查到的密码' + result[0].stu_password);
                if (result[0].stu_password == stu_password) {
                console.log(result);
                    res.send({
                        status: 0,
                        info: 'OK',
                        tokenID: result[0].stu_id,
                        tea_token: result[0].is_tea_ID,
                        message: '密码匹配正确'
                    })
                }
                else {
                    res.send({
                        status: 1,
                        info: 'error',
                        message: '密码匹配错误'
                    })
                }


            }

        }

    });
}

// 学生补全信息
