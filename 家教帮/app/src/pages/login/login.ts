import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams,App, ViewController } from 'ionic-angular';
import { ForgetPage } from '../forget/forget';
//import { Http } from "@angular/http";
import'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

//import { NgModel } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  items = [];
  isActive =1;
  logintel:string;     
  loginpassword:string;
  zhucetel: string;
  yanzhengma: Number;
  zhucepassword: string;
  errorMessage: string;
  error:any;
  yzma:Number;
  a:string='3';
  is_tea_ID;
  t;
  data;
  isClick(i){
    this.isActive = i;
  }

  constructor(
    public alertCtrl: AlertController,
    private http:HttpClient, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appCtrl: App,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController) {
  }
  
//------------提示框---------
presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: '提示！',
    subTitle:data,
    buttons: ['Ok'],
  });
  alert.present();
}

  
  goforget(){     //忘记密码页
    this.navCtrl.push(ForgetPage);
  }
  
  //--------包装成为json数据--------
  private encodeHttpParams(params: any): any {
    if (!params) return null;
    return new HttpParams({fromObject: params});
  }
  gobpage(){              //登录页面
    var that=this;
    var telreg = /^((1[3578][0-9]{1})+\d{8})$/;   //验证手机号的合法性
    var pwdreg = /^(\w){6,20}$/;//密码合法性验证
    if(this.logintel==null||this.logintel.length !==11){
      this.presentAlert('请正确输入11位手机号！');
    }else if(!telreg.test(this.logintel)){
      this.presentAlert('请正确输入合法的手机号！');
    }else{
      if(this.loginpassword ==null){
        this.presentAlert('密码不能为空，请输入密码！');
      }else if(!pwdreg.test(this.loginpassword)){
        this.presentAlert('密码必须是6-20位数字、字母！');
      }
      else{

        let loading = this.loadingCtrl.create({
         content: '登陆中，请稍后...'//数据加载中显示
        });
        loading.present();
        var params = {
         stu_phone:this.logintel,
          stu_password:this.loginpassword
        }
        this.http.post('http://www.zhuoran.fun:3000/login',this.encodeHttpParams(params)).subscribe(res => {
    
        loading.dismiss();
        if(res["status"]==0){  //登录成功
          that.data=res['information'];
          console.log(that.data);
          that.is_tea_ID=that.data['is_tea_ID'];
          console.log(that.is_tea_ID);
          if(that.is_tea_ID==null||that.is_tea_ID=='null'){   //判断是否为学生...
            window.localStorage.setItem('tokenID',that.data["stu_id"]);
            window.localStorage.setItem('head',that.data['head_src']);
            window.localStorage.setItem('pea_phone',that.data['stu_phone']);
            window.localStorage.setItem('pea_name',that.data['stu_name']);
            window.localStorage.setItem('pea_sex',that.data['stu_sex']);
            window.localStorage.setItem('pea_age',that.data['stu_age']);
            window.localStorage.setItem('pea_grade',that.data['stu_grade']);
            
        }else{   //为老师...
          console.log('haha')
            this.http.get('http://www.zhuoran.fun:3000'+'/showdata_tea?tea_id='+that.is_tea_ID).subscribe(res1 => {
             console.log("res:",res1);
             window.localStorage.setItem('pea_name',res1[0]['tea_name']);
             window.localStorage.setItem('teacherID',res1[0]['tea_id']);
             window.localStorage.setItem('pea_age',res1[0]['tea_age']);
             window.localStorage.setItem('pea_sex',res1[0]['tea_sex']);
             window.localStorage.setItem('pea_grade',res1[0]['tea_grade']);
             window.localStorage.setItem('pea_email',res1[0]['tea_email']);
             window.localStorage.setItem('pea_school',res1[0]['tea_school']);
             window.localStorage.setItem('pea_major',res1[0]['tea_major']);
             window.localStorage.setItem('stu_grade',res1[0]['stu_grade']);
             window.localStorage.setItem('stu_courses',res1[0]['stu_courses']);
             window.localStorage.setItem('remark',res1[0]['remark']);

            },
           error=>{
             console.log("error:",error)
            });
          window.localStorage.setItem('tokenID',that.data["stu_id"]);
          window.localStorage.setItem('head',that.data['head_src']);
          window.localStorage.setItem('pea_phone',that.data['stu_phone']);
        }
          this.navCtrl.push(TabsPage,{
            tea_id:this.is_tea_ID
          });
        }else{
          console.log(res);
          this.presentAlert(res["message"]);  //登录失败 账号不存在
        }
        },error =>{
          loading.dismiss();
          this.presentAlert('服务器连接错误，请重试'); 
            console.log("Error",error);
        })
  }
  }
}

  gologin(){          //注册页面
    var pwdreg = /^(\w){6,20}$/;//密码合法性验证  
    if(this.loginpassword =='' || this.yanzhengma==null){
      this.presentAlert('验证码，密码不能为空，请正确填入！');
    }else if(!pwdreg.test(this.zhucepassword)){
      this.presentAlert('密码必须是6-20位数字、字母！');
    }else if(this.yzma != this.yanzhengma){
      this.presentAlert('验证码错误，请输入正确验证码！');
    }else{
      let loading = this.loadingCtrl.create({
        content: '注册中，请稍后...'
       });
      var params = {
         stu_phone:this.zhucetel,
        stu_password:this.zhucepassword
       }
        this.http.post('http://www.zhuoran.fun:3000/register_stu',this.encodeHttpParams(params)).subscribe(res => {
          loading.dismiss();
        console.log(res);
        if(res["status"]==0){ 
          this.presentAlert('注册成功');
          this.isActive =1;  //跳到登录页

        }else{
          this.presentAlert(res["message"]);
          clearTimeout(this.t);
          this.verifyCode.verifyCodeTips = "获取验证码";
          this.verifyCode.disable = true;
        }
      },error =>{
        loading.dismiss();
        this.presentAlert('服务器连接错误，请重试'); 
      })
     }
  } 



  yanzheng(){           //获取验证码
    var b=document.getElementById('a'); //变灰
    b.style.backgroundColor="#f5f5f5";
    var telreg = /^((1[3578][0-9]{1})+\d{8})$/; //手机号合法性验证
    if(this.zhucetel==null||this.zhucetel.length !==11){
      this.presentAlert('请正确输入11位手机号！');
    }else if(!telreg.test(this.zhucetel)){
      this.presentAlert('请正确输入合法手机号！');
    }else {
      this.getCode();
        this.http.get("http://www.zhuoran.fun:3000" + "/verify?stu_phone=" + this.zhucetel ).subscribe(data => {
        console.log(data);
        this.yzma = data["tpl_value"];
      },error=>{
        this.presentAlert('服务器连接错误，请重试'); 
        console.log("Error",error);
      });
     }
     }

 
  codeParam = {
    fromflag: 2,
    usertel: ""
}
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,
    disable: true
  }
  settime(){
    if (this.verifyCode.countdown == 1) {
    this.verifyCode.countdown = 60;
    this.verifyCode.verifyCodeTips = "获取验证码";
    this.verifyCode.disable = true;
    return;
    } else {
    this.verifyCode.countdown--;
    }
    this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
    this.t=setTimeout(() => {
    this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
    this.settime();
    }, 1000);
}

getCode() {
    //发送验证码成功后开始倒计时
    this.verifyCode.disable = false;
    this.settime();

}

}
