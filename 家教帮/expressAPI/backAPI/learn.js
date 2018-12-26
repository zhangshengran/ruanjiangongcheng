
var con = require('../config/config').con;
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'upload_tmp/' });


let OSS = require('ali-oss');
let client3 = new OSS({
    region: 'oss-cn-beijing',
    accessKeyId: 'LTAILzRjytI5AIO8',
    accessKeySecret: 'VtwJkolPmWi0k3RvxKqtG5v1wMSBWm',
    bucket: 'tutor-learn',
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




exports.deVideo = function (req, res) {
    var id = req.query.id;
    con.query('delete from video where id = ?', [id], (err, result) => {
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

exports.createVideo = async function (req, res) {

    var course_name = req.body.course_name;
    var course_time = req.body.course_time;
    var course_author = req.body.course_author;

    console.log(course_name);  // 上传的文件信息
    console.log(req.body);
    console.log(req.files);
    var time = new Date().getTime();
    var type = req.files[0].originalname.split('.')[1];
    var name = course_name + time + '.' + type;
    var des_file = "./upload_tmp/" + name;
    await fs.rename(req.files[0].path, des_file, function (error) {
        if (error) {
            console.log(error);
        } else {
            aliyunPUT_learn('video/', name, des_file, up);
        }
    })
    function up(course_src) {
        var course_img = course_src + '?x-oss-process=video/snapshot,t_8000,f_jpg,w_800,h_600,m_fast';//视频截帧
        var sql = 'insert into video(course_src,course_name,course_time,course_author,course_img) values(?,?,?,?,?)';
        con.query(sql, [course_src, course_name, course_time, course_author, course_img], (err, result) => {
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


}





// -------------------------------------------

exports.writeNew = async function (req, res) {

    var header = req.body.header;
    var content = req.body.content;
    var time = req.body.time;


    var time2 = new Date().getTime();
    var type = req.files[0].originalname.split('.')[1];
    var name = header + time2 + '.' + type;
    var des_file = "./upload_tmp/" + name;
    fs.rename(req.files[0].path, des_file, function (error) {
        if (error) {
            console.log(error);
        }
    })

    var src = aliyunPUT_learn('news/', name, des_file, up);

    function up(src) {
        var sql = 'insert into learnNews(header,content,src,time) values(?,?,?,?)'
        con.query(sql, [header, content, src, time], (err, result) => {
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


}
exports.delNews = function (req, res) {
    var id = req.query.id;
    con.query('delete from learnNews where id = ?', [id], (err, result) => {
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




exports.upLearnFile =  function (req, res) {

    var file_name = req.body.file_name || req.files[0].originalname;
    var upload_time = req.body.upload_time;
    var upload_peo = req.body.upload_peo;
    var fileVerify = req.body.fileVerify;
    var srore = req.body.srore;


    // 上传的文件信息
    console.log(req.body);
    console.log(req.files);

    // res.send('OK1');
    var time = new Date().getTime();
    var type = req.files[0].originalname.split('.')[1];
    var name = file_name + time + '.' + type;
    var des_file = "./upload_tmp/" + name;

    function up(file_src) {
        var sql = 'insert into learnFile(file_name,upload_time,upload_peo,fileVerify,srore,file_src) values(?,?,?,?,?,?)';
        con.query(sql, [file_name, upload_time, upload_peo, fileVerify, srore, file_src], (err, result) => {
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
            aliyunPUT_learn('material/', name, des_file, up);

        }
    })


}


exports.delLearnFile = function (req, res) {
    var id = req.query.id;
    con.query('delete from learnFile where id = ?', [id], (err, result) => {
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


exports.delposter = function (req, res) {
    var co_id = req.query.co_id;
    con.query('delete from community where co_id = ?', [co_id], (err, result) => {
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


