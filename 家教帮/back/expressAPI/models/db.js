
const mysql = require('mysql'),
    con = mysql.createConnection({
        host: '39.105.111.123',
        user: 'root',
        password: 'xingyun2016',
        database: 'test'
    });
   
    module.exports ={
         add(id, pwd,callback) {
            // con.connect();
            con.query('insert into login(userId,password) values(?,?)',
                [id, pwd], (err, result) => {
                    if (err) {
                        return false;
                    }else
                    {return true;}
                });
            // con.end();
        },
      del(id,callback) {
            // con.connect();
            con.query('delete from login where userId = ?', [id], (err, result) => {
                if (err) {
                    return false;
                }else
                {return true;}
            });
            // con.end();
        },
         select(id,callback) {
            con.query('select password from login where userId = ?', [id], (err, result) => {
            
                if (err) {
                    return false;
                }else
                { 
                    //   console.log("查询结果是"+result);
                      callback(result);
                      return result;
                }
                
            });
        } 
        
        
        
    } 


     // 数据库重新建立连接代码
    // function handleDisconnect(connection) {
    //     connection.on('error', function(err) {
    //       if (!err.fatal) {
    //         return;
    //       }
       
    //       if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
    //         throw err;
    //       }
       
    //       console.log('Re-connecting lost connection: ' + err.stack);
       
    //       connection = mysql.createConnection(connection.config);
    //       handleDisconnect(connection);
    //       connection.connect();
    //     });
    //   }
       
    //   handleDisconnect(con);
