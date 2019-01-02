
<div>
	<img src="API.png"/>
</div>

<h2>API</h2>
<h3>说明:</h3>
<ul>
      <li>id都为int类型，其他字段都为string类型！</li>
      <li>status：  0表示成功，1表示失败</li>
      <li>message:具体的消息信息</li>
    </ul>
<body>
 <h4>获取验证码</h4>    
       <span>接口：/verify</span><br/>
       <span>请求：GET</span><br/>
       <span>参数：stu_phone   手机号</span><br/>
       <span>调用形式：/verify?stu_phone=15690580872</span><br/>
        
       成功返回值：
                {
                    status:0,
                    stu_phone,//用户收到的验证码
                    message:'请求成功'
                }
              
            }
       错误返回值:
            {
                   status:1,
                   message:errorMessage
            }    
            );
----------------------------------------------------- 学生 ----------------------------------------------------------

<h4>学生注册</h4>
       <span>接口：/register_stu</span><br/>
       <span>请求：POST</span><br/>
       <span>参数：stu_phone  手机号<br/>
                   stu_password  密码
        </span><br/>
       <span>调用形式：/register_stu</span><br/>
        
       成功返回值：
                {
                    status:0,
                    info    : 'OK',
                    message:'注册成功'
                }
              
            }
       错误返回值:
                {
                   status  : 1,
                info    : 'error',
                message:'注册失败'
            }    
            );          


  <h4>学生登陆</h4>
       <span>接口：/login</span><br/>
       <span>请求：POST</span><br/>
       <span>参数：stu_phone  手机号<br/>
                 stu_password  密码
       </span><br/>
       <span>调用形式：/login</span><br/>

       成功返回值：
                {
                    status:0,
                    info    : 'OK',
                    tokenID:(用户tokenID,唯一标识)
                    tea_token:(若已经为老师则此值为老师id,若未注册老师，此值为null)
                     information 用户的所有资料
                    message:'密码匹配正确'
                }
              
            }
       错误返回值:{
                   status:1,
                    info    : 'error',
                    message:'密码匹配错误'
            }    
            ); 


  <h4>更新学生资料</h4>    
        <span>接口：/updata_stu</span><br/>
        <span>请求：POST</span><br/>
        <span>调用形式：/updata_stu</span><br/>
        <span>参数：
         stu_id  查找学生用<br/>
         stu_name<br/>
         stu_age <br/>
         stu_sex <br/>
         stu_grade
        </span><br/>

        成功返回值：
                {
                    status:0,
                    message:'修改成功'
                }
              
            }
        错误返回值:{
                   status:1,
                   message:errorMessage
            }    
            );


  <h4>获取学生资料</h4>
        <span>接口：/showdata_stu</span><br/>
        <span>请求：get</span><br/>
        <span>调用形式：/showdata_stu?stu_id=?</span><br/>
        <span>参数：stu_id</span><br/>
            
        成功返回值：
                {
                     array[object]
                }
              
            }
        错误返回值:{
                   status:1,
                   message:errorMessage
            }    
            );


  <h4>头像上传</h4>
        <span>接口：/upload_head</span><br/>
        <span>请求：post</span><br/>
        <span>参数：stu_id 用户id<br/>
                    file文件<br/>
        </span><br/>
            
        成功返回值：
                {
                    status:0,
                    headurl:url,
                    info:'ok',
                    message:'成功'
                }
              
            }
        错误返回值:{
                   status:1,
                   message:errorMessage
            }    
            );

----------------------------------------------------- 老师 ----------------------------------------------------------
  <h4>注册老师</h4>
        <span>接口：/register_tea</span><br/>
        <span>请求：POST</span><br/>
        <span>参数：tea_name  教师姓名<br/>
             tea_age  教师年龄<br/>
             tea_sex  教师性别<br/>
             tea_email  教师邮箱<br/>
             stu_grade   可教的学生年级<br/>
             stu_courses  可教的学生科目<br/>
             tea_school    老师所在学校<br/>
             tea_major     老师专业<br/>
             tea_grade   老师所在年级<br/>
             userID      老师身份证号码<br/>
             remark      备注信息<br/>
             stu_token   学生ID<br/>
        </span><br/>
        <span>调用形式：/register_tea</span><br/>

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


  <h4>查找老师</h4>
        <span>接口：/select_tea</span><br/>
        <span>请求：get</span><br/>
        <span>参数：无调用参数</span><br/>
        <span>调用形式：/select_tea</span><br/>
        
         成功返回值：
                {
                array[object]  //返回一个数组，每个老师的信息为数组中的一个对象
                }
              
            }

  <h4>老师更新资料</h4>
        <span>接口：/updata_tea</span><br/>
        <span>请求：post</span><br/>
        <span>参数: 
                  tea_id  查找老师用<br/>
                  tea_name <br/>
                  tea_age <br/>
                  tea_sex <br/>
                  tea_email <br/>
                  stu_grade <br/>
                  stu_courses <br/>
                  tea_school <br/>
                  tea_major <br/>
                  tea_grade <br/>
                  remark = <br/>
        </span><br/>

        失败
                 {
                status: 1,
                info: 'error',
                message: '数据库错误，未能更新资料'
                 }
        成功            status: 0,
                info: 'or',
                message: '更新成功'



  <h4>获取老师资料</h4>
        <span>接口：/showdata_tea</span><br/>
        <span>请求：get</span><br/>
        <span>参数：
            tea_id
        </span><br/>
        <span>调用形式：/showdata_tea?tea_id=?</span><br/>

        成功返回值：
                {
                     array[object]
                }
              
            }
        错误返回值:{
                   status:1,
                   message:errorMessage
            }    
            );


  <h4>搜索老师</h4>
        <span>接口：/search</span><br/>
        <span>请求：get</span><br/>
        <span>参数：
           search_txt
        </span><br/>

        成功返回值：
                {
                     array[object]
                }  
            }
        错误返回值:{
                   status:1,
                   message:errorMessage
            }    
            );


----------------------------------------------------- 老师 ----------------------------------------------------------

----------------------------------------------------- 视频 ----------------------------------------------------------

  <h4>获得视频</h4>
        <span>接口：/select_video</span><br/>
        <span>请求：get</span><br/>
        <span>参数：无调用参数</span><br/>
        <span>调用形式：/select_video</span><br/>
        
         成功返回值：
                {
                array[object]  //返回一个数组，每个视频的信息为数组中的一个对象
                }
              
            }

----------------------------------------------------- 视频 -----------------------------------------------------------

----------------------------------------------------- 订单 -----------------------------------------------------------
  <h4>创建订单</h4>
        <span>接口：/order_set</span><br/>
        <span>请求：POST</span><br/>
        <span>参数：
            stu_id 学生ID int<br/>
            tea_id 老师ID int <br/>
            class_time 上课时间  string <br/>
            order_address 上课地址  string <br/>
             order_time  订单时间 <br/>
             order_course 预约上课科目 <br/>
        </span><br/>
        <span>调用形式：/order_set</span><br/>

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


  <h4>学生订单查询</h4>
        <span>接口：/select_order_stu</span><br/>
        <span>请求：get</span><br/>
        <span>参数：
            stu_id 学生ID int <br/>
        </span><br/>
        <span>调用形式：/select_order_stu?stu_id=1</span<br/>

        成功返回值：
                {
                 array[object]  订单详情的数组，每个object为一个订单详细信息
                 
                }
        错误返回值：
                status: 1,
                    info: 'error2',
                    message: '错误'
            }



  <h4>老师订单查询</h4>
        <span>接口：/select_order_tea</span><br/>
        <span>请求：get</span><br/>
        <span>参数：
            stu_id 老师ID int
        </span><br/>
        <span>调用形式：/select_order_tea?tea_id=1</span><br/>
        
        成功返回值：
                {
                 array[object]  订单详情的数组，每个object为一个订单详细信息
                }
        错误返回值：
                status: 1,
                    info: 'error2',
                    message: '错误'
            }


  <h4>找回密码发送验证码</h4>
        <span>接口：/findVerify</span><br/>
        <span>请求：get</span><br/> 
        <span>参数：
            stu_phone 用户手机号 int
        </span><br/>
        <span>调用形式：findVerify？stu_phone = ?</span><br/>

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


  <h4>更改密码</h4>
        <span>接口：/forget</span><br/>
        <span>请求：POST</span><br/>
        <span>参数：
            stu_phone 用户手机号 int<br/>
            stu_password 新密码 int<br/>
        </span><br/>
        <span>调用形式：/forget</span><br/>

        成功返回值：
                {
                    status:0,
                    message:'修改成功'
                }
              
            }
        错误返回值:{
                   status:1,
                   message:errorMessage
            }    
            );


  <h4>社区学习圈板块222</h4>
      <h5>写贴</h5>
        <span>/writeNote</span><br/>
        <span>接口：/writeNote</span><br/>
        <span>请求：POST</span><br/>
        <span>参数：
           poster_id 学生id<br/>
            content 发帖内容<br/>
            img 图片<br/>
        </span><br/>

        成功返回值：
               status:0,
                info:'ok',
                message:'成功'
              
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>得到所有帖子</h4>
        <span>接口：/getAllNotes</span><br/>
        <span>请求：get</span><br/>
        <span>参数：无</span><br/>
          
        成功返回值：
              array[object]
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>得到自己的帖子</h4>
        <span>接口：/getOwnNotes</span><br/>
        <span>请求：get</span><br/>
        <span>参数：stu_id</span><br/>
          
        成功返回值：
              array[object]
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


------------------------------------------------------ 学习圈0 ------------------------------------------------------
  <h4>学习视频</h4>
        <span>接口：/video</span><br/>
        <span>请求：get</span><br/>
        <span>参数：无</span><br/>
          
        成功返回值：
              array[object]
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>新闻</h4>
        <span>接口：/news</span><br/>
        <span>请求：get</span><br/>
        <span>参数：无</span><br/>
          
        成功返回值：
              array[object]
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>资料</h4>
        <span>接口：/learnFile</span><br/>
        <span>请求：get</span><br/>
        <span>参数：fileVerify   资料分类识别码</span><br/>
          
        成功返回值：
              array[object]
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h3>后端接口</h3>
------------------------------------------------------- back ---------------------------------------------------------
  <h4>查找所有学生</h4>
        <span>接口：/getStu</span><br/>
        <span>请求：get</span><br/>
        <span>参数：无</span><br/>

          
        成功返回值：
              array[object]
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>删除学生</h4>
        <span>接口：/deStu</span><br/>
        <span>请求：get</span><br/>
        <span>参数：stu_id</span><br/>
          
        成功返回值：
               status:0,
                info:'ok',
                message:'删除成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>查看订单</h4>
        <span>接口：/showOrders</span><br/>
        <span>请求：get</span><br/>
        <span>参数：无</span><br/>
          
        成功返回值：
              array[object]
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>删除视频</h4>
        <span>接口：/deVideo</span><br/>
        <span>请求：get</span><br/>
        <span>参数：id  视频id</span><br/>
          
        成功返回值：
               status:0,
                info:'ok',
                message:'删除成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );

            
  <h4>删除新闻</h4>
        <span>接口：/delNews</span><br/>
        <span>请求：get</span><br/>
        <span>参数：id  新闻id</span><br/>
          
        成功返回值：
               status:0,
                info:'ok',
                message:'删除成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );



  <h4>发布视频</h4>
        <span>接口：/createVideo</span><br/>
        <span>请求：post</span><br/>
        <span>参数：course_name 视频名
                    course_time       发布时间<br/>
                    course_author     发布作者<br/>
        </span><br/>

        成功返回值：
               status:0,
                info:'ok',
                message:'上传成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>上传学习文件</h4>
        <span>接口：/upLearnFile</span><br/>
        <span>请求：post</span><br/>
        <span>参数：var file_name  文件名<br/>
                    upload_time    上传时间<br/>
                    upload_peo    上传人<br/>
                    fileVerify    文件识别码  0为初中1为高中2为推荐<br/>
                    srore   文件评分<br/>
        </span>

        成功返回值：
               status:0,
                info:'ok',
                message:'上传成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>删除学习资料</h4>
        <span>接口：/delLearnFile</span><br/>
        <span>请求：get</span><br/>
        <span>参数：id  文件id</span><br/>
          
        成功返回值：
               status:0,
                info:'ok',
                message:'删除成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );


  <h4>删帖子</h4>
        <span>接口：/delposter</span><br/>
        <span>请求：get</span><br/>
        <span>参数：co_id</span><br/>
          
        成功返回值：
               status:0,
                info:'ok',
                message:'删除成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            );           


  <h4>新闻发布</h4>
        <span>接口：/writeNew</span><br/>
        <span>请求：post</span><br/>
        <span>参数：header<br/>
             content<br/>
             time<br/>
        </span><br/>

        成功返回值：
               status:0,
                info:'ok',
                message:'发布成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            ); 




  <h4>获得建议</h4>
        <span>接口：/advicesel</span><br/>
        <span>请求：get</span><br/>
        <span>参数：adv_user (id)<br/>
            <br/>
            <br/>
        </span><br/>

        成功返回值：
              
              array[object];
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            ); 



<h4>投诉建议</h4>
        <span>接口：/writeAdvice</span><br/>
        <span>请求：post</span><br/>
        <span>参数：adv_user 投诉人id<br/>
            adv_content 建议内容<br/>
            adv_time时间<br/>
        </span><br/>

        成功返回值：
               status:0,
                info:'ok',
                message:'建议成功'
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            ); 


<h4>得到头条内容</h4>
        <span>接口：/toutiao</span><br/>
        <span>请求：get</span><br/>
      

         成功返回值：
              
              array[object];
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            ); 


<h4>得到轮播图</h4>
        <span>接口：/lun</span><br/>
        <span>请求：get</span><br/>
      

         成功返回值：
              
              array[object];
            }
        错误返回值:{
                    status:1,
                    info:'error',
                    message:'数据库错误'
            }    
            ); 
            
</body>