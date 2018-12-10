API

说明


    id都为int类型，其他字段都为string类型！
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
                    tea_token:(若已经为老师则此值为老师id,若未注册老师，此值为null)
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
                    tea_ID:(老师用户tokenID,唯一标识)
                    message:'注册成功'
                }
              
            }
        错误返回值:{
                   status  : 1,
                info    : 'error',
                tea
                message:'注册失败'
            }    
            ); 

查找老师
  接口：/select_tea
        请求：get
        调用形式：/select_tea
        参数：无调用参数
         成功返回值：
                {
                array[object]  //返回一个数组，每个老师的信息为数组中的一个对象
                }
              
            }



-------------------------老师 ----------------------------------------------------------------------.


-------------------------视频 ----------------------------------------------------------------------.
获得视频
  接口：/select_video
        请求：get
        调用形式：/select_video
        参数：无调用参数
         成功返回值：
                {
                array[object]  //返回一个数组，每个视频的信息为数组中的一个对象
                }
              
            }
-------------------------视频 ----------------------------------------------------------------------.
-------------------------订单 ----------------------------------------------------------------------. 
        创建订单
        接口：/order_set
        请求：POST
        调用形式：/order_set
        参数：
            stu_id 学生ID int
            tea_id 老师ID int 
            class_time 上课时间  string
            order_address 上课地址  string
             order_time  订单时间
         成功返回值：
                {
                status: 0,
                    info: 'OK',
                    message: '订单生成成功'
                }
            错误返回值：
                status: 1,
                    info: 'error2',
                    message: '数据库写入错误'
            }


学生订单查询

        接口：/select_order_stu
        请求：get
        调用形式：/select_order_stu?stu_id=1
        参数：
            stu_id 学生ID int
         成功返回值：
                {
                 array[object]  订单详情的数组，每个object为一个订单详细信息
                 
                }
            错误返回值：
                status: 1,
                    info: 'error2',
                    message: '错误'
            }



老师订单查询

        接口：/select_order_tea
        请求：get
        调用形式：/select_order_tea?tea_id=1
        参数：
            stu_id 老师ID int
         成功返回值：
                {
                 array[object]  订单详情的数组，每个object为一个订单详细信息
                }
            错误返回值：
                status: 1,
                    info: 'error2',
                    message: '错误'
            }
