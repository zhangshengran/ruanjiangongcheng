var request = require('request');
var querystring = require('querystring');

var con = require('./db').con;

// 找回密码发送验证码接口
exports.findVerify = function (req, res) {
  console.log(req.query);
  var stu_phone = req.query.stu_phone;//获得请求的手机号

  con.query('select * from students where stu_phone=?', [stu_phone], (err, result) => {
    if (err) {
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }
    else {
      if (result.length == 0) {
        res.send({
          status: 0,
          info: 'error',
          message: '此账号不存在'
        })
      }
      else {

        var tpl_value = Math.round(Math.random() * 10 * 10 * 10 * 10 * 10)//获得随机5位验证码

        console.log(stu_phone)

        var queryData = querystring.stringify({
          "mobile": stu_phone,  // 接受短信的用户手机号码
          "tpl_id": "119441",  // 您申请的短信模板ID，根据实际情况修改
          "tpl_value": "#code#=" + tpl_value,  // 您设置的模板变量，根据实际情况修改
          "key": "3fd6da67a69d793673fc069c1cbb8868",  // 应用APPKEY(应用详细页查询)
        });

        var queryUrl = 'http://v.juhe.cn/sms/send?' + queryData;

        request(queryUrl, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            // console.log(body) // 打印接口返回内容      
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容 
            console.log(jsonObj);
            if (jsonObj.error_code !== 0) {
              res.send({
                status: 1,
                message: jsonObj.reason
              });
            } else {
              res.send({
                status: 0,
                tpl_value,
                message: jsonObj.reason
              });
            }
          } else {
            res.send({
              status: 1,
              message: '请求失败'
            });
          }
        })

      }
    }
  })
}





exports.forget = function (req, res) {
  // console.log(req);
  console.log(req.body);

  var stu_phone = req.body.stu_phone;
  var stu_password = req.body.stu_password;

  var sqlupdate = 'UPDATE students set stu_password = ? WHERE stu_phone = ?';
  con.query(sqlupdate, [stu_password, stu_phone], function (err, result) {
    if (err) {

      res.send({
        status: 1,
        info: 'error',
        message: '数据库错误，未能更改密码'
      })
    } else {


      res.send({
        status: 0,
        info: 'ok',
        message: '修改成功'
      })

    }

  })
}
