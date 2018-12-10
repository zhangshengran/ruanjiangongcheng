import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import $ from 'jquery'; //需要引入jquery插件
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the MydataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mydata',
  templateUrl: 'mydata.html',
})
export class MydataPage {
  tea_name:any;
  tea_age:any;
  tea_sex:any;
  tea_email: any;
  stu_courses: any;
  tea_school: any;
  tea_major: any;
  userID: any;
  remark: any;
  tea_grade:any;  //?数字or字符串
  stu_grade=[];
  ionViewWillEnter() {  //ts语法中没有checked属性    复选框,点击多次
    var that=this;
    $(function($){   
      $('#d').click(function(){
       if( $("#a").is(":checked")===true){
          $.each(that.stu_grade,function(index,value) {
            if(value==='小学'){
               that.stu_grade.splice(index,1);
            }
           })
          that.stu_grade.push('小学');
         // console.log('1',that.stu_grade);
        }else{
            $.each(that.stu_grade,function(index,value) {
              if(value==='小学'){
                that.stu_grade.splice(index,1);
              }
           })
        }
       if($("#b").is(":checked")===true){
          $.each(that.stu_grade,function(index,value) {
            if(value==='初中'){
              that.stu_grade.splice(index,1);
            }
          })
          that.stu_grade.push('初中');
         // console.log('2',that.stu_grade)
        }else{
          $.each(that.stu_grade,function(index,value) {
            if(value==='初中'){
              that.stu_grade.splice(index,1);
             }
        })
        }
       if($("#c").is(":checked")===true){
          $.each(that.stu_grade,function(index,value) {
            if(value==='高中'){
               that.stu_grade.splice(index,1);
            }
          })
          that.stu_grade.push('高中');
          //console.log('3',that.stu_grade)
        }else{
          $.each(that.stu_grade,function(index,value) {
            if(value==='高中'){
              that.stu_grade.splice(index,1);
             }
        })
        }
        console.log(that.stu_grade);
      })
    })
  }
presentAlert(data) {  //提示框
  let alert = this.alertCtrl.create({
    title: '提示！',
    subTitle:data,
    buttons: ['Ok'],
  });
  alert.present();
}
  private encodeHttpParams(params: any): any {  //解析成json字符串
    if (!params) return null;
    return new HttpParams({fromObject: params});
  }
  goback(){
    var emailreg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; //验证邮箱
    var idreg=/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //验证身份证 
    if(this.tea_age==null||this.tea_sex==null||this.stu_grade==null||this.stu_courses==null||this.tea_school==null||this.tea_major==null
      ||this.tea_grade==null||this.tea_name==null||this.remark==null){
        this.presentAlert('请检查是否每一项都输入了');  
    }else if(!emailreg.test(this.tea_email)){
      this.presentAlert('请输入合法的邮箱地址');
    }else if(!idreg.test(this.userID)){
      this.presentAlert('请输入合法的身份证号');  
    }else{
    console.log("教师年龄："+this.tea_age);
    console.log("教师性别："+this.tea_sex);
    console.log("邮箱："+this.tea_email);
    console.log("教学年级："+this.stu_grade);
    console.log("教学科目："+this.stu_courses);
    console.log("学校："+this.tea_school);
    console.log("专业："+this.tea_major);
    console.log("年级："+this.tea_grade);
    console.log("姓名："+this.tea_name);
    console.log("身份证号："+this.userID);
    console.log("备注："+this.remark);
    var params = {
      tea_name:this.tea_name,
      tea_age:this.tea_age,
      tea_sex:this.tea_sex,
      tea_email:this.tea_email,
      stu_grade:this.stu_grade, //可教的学生年级 //复选框必须准备多个参数
      stu_courses:this.stu_courses,
      tea_school:this.tea_school,
      tea_major:this.tea_major,
      tea_grade:this.tea_grade,  //老师所在年级  //单选框可以只传一个参数
      userID:this.userID,
      remark:this.remark
      }
    this.http.post('http://www.zhuoran.fun:3000/register_tea',this.encodeHttpParams(params)).subscribe(res => {
        console.log(res);
        this.presentAlert(res['message']);
        this.navCtrl.pop();
      },error =>{
        this.presentAlert('服务器连接错误');
      })
    
  }
}
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public alertCtrl: AlertController,) {
  }


}
