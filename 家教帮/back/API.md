API

说明



    status：  0表示成功，1表示失败
   message:具体的消息信息


获取验证码：
        接口：/verify
        请求：GET
        参数：stu_phone   手机号
        调用形式：/verify?stu_phone=15690580872
        成功返回值：
                {
                    status:0,
                    stu_phone,//用户收到的验证码
                    message:'请求成功'
                }
              
            }
        错误返回值:{
                   status:1,
                   message:errorMessage
            }    
            );




学生注册：
        接口：/register_stu
        请求：POST
        参数：stu_phone  手机号
             stu_password  密码
        调用形式：/register_stu
        成功返回值：
                {
                    status:0,
                    info    : 'OK',
                    message:'注册成功'
                }
              
            }
        错误返回值:{
                   status  : 1,
                info    : 'error',
                message:'注册失败'
            }    
            );          


学生登陆：
        接口：/login
        请求：POST
        参数：stu_phone  手机号
             stu_password  密码
        调用形式：/login
        成功返回值：
                {
                    status:0,
                    info    : 'OK',
                    tokenID:(用户tokenID,唯一标识)
                    message:'密码匹配正确'
                }
              
            }
        错误返回值:{
                   status:1,
                    info    : 'error',
                    message:'密码匹配错误'
            }    
            );      
-------------------------老师 ----------------------------------------------------------------------
成为老师：
        接口：/register_tea
        请求：POST
        参数：tea_name  教师姓名
             tea_age  教师年龄
             tea_sex  教师性别
             tea_email  教师邮箱
             stu_grade   可教的学生年级
             stu_courses  可教的学生科目
             tea_school    老师所在学校
             tea_major     老师专业
             tea_grade   老师所在年级
             userID      老师身份证号码
             remark      备注信息
        调用形式：/register_tea
        成功返回值：
                {
                    status:0,
                    info    : 'OK',
                    message:'注册成功'
                }
              
            }
        错误返回值:{
                   status  : 1,
                info    : 'error',
                message:'注册失败'
            }    
            ); 



-------------------------老师 ----------------------------------------------------------------------