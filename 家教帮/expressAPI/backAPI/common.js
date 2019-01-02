var aliyun = require('../config/config');
var con = require('../config/config').con;



var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'upload_tmp/' });


let OSS = require('ali-oss');
let client3 = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAILzRjytI5AIO8',
    accessKeySecret: 'VtwJkolPmWi0k3RvxKqtG5v1wMSBWm',
    bucket: 'tutor666',
});
aliyunPUT_learn = async function put(path, filename, temfile, callback) {
    try {
        let result = await client3.put(path + filename, temfile);
        var url = result.url;//文件读取地址
        callback(url);
    } catch (err) {
        console.log(err);
    }
}



exports.getStu = function (req, res) {
    con.query('select * from students', (err, result) => {
        if (err) {
            res.send(
                {
                    status: 1,
                    message: '数据库错误'
                }
            )
        } else {
            res.json(result);
        }
    })
}
exports.deStu = function (req, res) {
    var stu_id = req.query.stu_id;


    con.query('delete from students where stu_id = ?', [stu_id], (err, result) => {
        if (err) {
            res.send(
                {
                    status: 1,
                    message: '数据库错误'
                }
            )
        } else {
            res.send(
                {
                    status: 0,
                    info: 'ok',
                    message: '删除成功'
                }
            )
        }
    });

}

exports.showOrders = function (req, res) {
    con.query('select * from order2', (err, result) => {
        if (err) {
            res.send(
                {
                    status: 1,
                    message: '数据库错误'
                }
            )
        } else {
            res.json(result);
        }
    })
}








//建议查询
exports.advicesel = function (req, res) {

    var adv_user = req.query.adv_user;
    if (!adv_user) {
        con.query('SELECT * FROM advice', function (err, result) {
            if (err) {
                res.send({
                    status: 1,
                    info: 'error',
                    message: '系统错误'
                });
            } else {
                res.json(result);
            }
        })
    } else {
        con.query('SELECT * FROM advice where adv_user = ?', [adv_user], function (err, result) {
            if (err) {
                res.send({
                    status: 1,
                    info: 'error',
                    message: '系统错误'
                });
            } else {
                res.json(result);
            }
        })
    }

}

// 写建议

exports.writeAdvice = function (req, res, next) {

    var adv_user = req.body.adv_user;
    var adv_content = req.body.adv_content;
    var adv_time = req.body.adv_time;

    con.query('insert into advice(adv_user,adv_content,adv_time) values(?,?,?)', [adv_user, adv_content, adv_time], function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            res.send({
                status: 0,
                info: 'ok',
                message: '建议成功'
            });
        }

    })
}


//回复
exports.reply = function (req, res, next) {

    var adv_id = req.body.adv_id;
    var reply = req.body.reply;
     console.log(req.body);

    con.query('update advice set reply = ? where adv_id = ?', [reply, adv_id], function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            res.send({
                status: 0,
                info: 'ok',

            })
        }

    })
}


//   /删除建议
exports.advicedel = function (req, res, next) {


    var adv_id = req.query.adv_id;
    console.log(adv_id);
    con.query('delete FROM advice where adv_id = ?', [adv_id], function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        }
    })
}

//头条查询接口
exports.toutiaosel = function (req, res, next) {

    con.query('SELECT * FROM toutiao', function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            res.json(result);
        }
    })
}

//头条增加接口
exports.toutiaoadd = function (req, res, next) {

    var toutiao_content = req.query.toutiao_content;



    con.query('insert into toutiao(tou_content) values(?)', [toutiao_content], function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
            console.log(err);
        }
    })
}

//头条删除接口
exports.toutiaodel = function (req, res, next) {


    var tou_id = req.query.tou_id;
    console.log(tou_id);
    con.query('delete FROM toutiao where tou_id = ?', [tou_id], function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        }
    })
}


//查询接口
exports.lunbo_sel = function (req, res, next) {

    con.query('SELECT * FROM lunbo', function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            res.json(result);

        }
    })
}

//轮播删除接口
exports.lun_del = function (req, res, next) {

    var lun_id = req.query.lun_id;
    con.query('delete FROM lunbo where lun_id = ?', [lun_id], function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            res.json(result);
        }
    })
};




//轮播图增加接口
exports.lunbo_add = function (req, res, next) {

    var lun_id = req.body.lun_id;
    var lun_name = req.body.lun_name;
    var lun_src = req.body.lun_src;

    con.query('insert into lunbo(lun_id,lun_name,lun_src) values(?,?,?)', [lun_id, lun_name, lun_src], function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        }
        else {
            res.json(result);
        }
    })
};


exports.fileNum = function (req, res, next) {

    con.query('SELECT * FROM learnFile', function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            var leng = result.length;

            res.json(leng);

        }
    })
}


exports.orderNum = function (req, res, next) {

    con.query('SELECT * FROM order2', function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            var leng = result.length;
            res.json(leng);

        }
    })
}



exports.studentsNum = function (req, res, next) {

    con.query('SELECT * FROM students', function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            var leng = result.length;
            res.json(leng);

        }
    })
}



exports.videoNum = function (req, res, next) {

    con.query('SELECT * FROM video', function (err, result) {
        if (err) {
            res.send({
                status: 1,
                info: 'error',
                message: '系统错误'
            });
        } else {
            var leng = result.length;
            res.json(leng);

        }
    })
}





exports.uplunbo =  function (req, res) {


    // 上传的文件信息
    console.log(req.body);
    console.log(req.files);

    // res.send('OK1');
    var time = new Date().getTime();
    var type = req.files[0].originalname.split('.')[1];
    var name =  time + '.' + type;
    var des_file = "./upload_tmp/" + name;

    function up(lun_src) {
        var sql = 'insert into lunbo(lun_src) values(?)';
        con.query(sql, [lun_src], (err, result) => {
            if (err) {
                res.send(
                    {
                        status: 1,
                        message: '数据库错误'
                    }
                )
            } else {
                res.send({
                    status: 0,
                    message: 'OK'
                });
            }
        })
    }

    fs.rename(req.files[0].path, des_file, function (error) {
        if (error) {
            console.log(error);
        } else {
            aliyunPUT_learn('', name, des_file, up);

        }
    })


}