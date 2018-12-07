var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'tutor_database',
    port:'3306'
});

connection.connect();

//增
//     var addsql = 'INSERT INTO students(stu_Id,stu_name,stu_age,stu_sex,stu_grade,stu_phone,stu_password) VALUES(?,?,?,?,?,?,?)';
//     var addsqlParams = ['0002','小红',20,'女','大一','12345678955','111111']
    
//     connection.query(addsql,addsqlParams,function (err,result){
//         if(err){
//             console.log('[INSERT ERROR] - ',err.message);
//             return;
//            }        
         
//           console.log('INSERT ID:',result);        
  
//    });
    


//查
// var  sql = 'SELECT * FROM students';
// connection.query(sql,function (err, result) {
//     if(err){
//       console.log('[SELECT ERROR] - ',err.message);
//       return;
//     }

// //    console.log('--------------------------SELECT----------------------------');
//    console.log(result);
// //    console.log('------------------------------------------------------------\n\n');  
// });



//改
// var modSql = 'UPDATE students SET stu_name = ? WHERE stu_Id = 0002';
// var modSqlParams = ['小芳'];
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }        
//   console.log('UPDATE affectedRows',result.affectedRows);
// });


//删
// var delSql = 'DELETE FROM students where stu_Id=0002';
// connection.query(delSql,function (err, result) {
//         if(err){
//           console.log('[DELETE ERROR] - ',err.message);
//           return;
//         }
//        console.log('DELETE affectedRows',result.affectedRows); 
// });



connection.end();