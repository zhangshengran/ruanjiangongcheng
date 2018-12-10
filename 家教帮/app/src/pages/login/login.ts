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
          console.log("res",res);
          window.localStorage.setItem('tokenID',res["tokenID"]);
          console.log('tokenID',window.localStorage.getItem('tokenID'));
          this.navCtrl.push(TabsPage);
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
        }
      },error =>{
        loading.dismiss();
        this.presentAlert('服务器连接错误，请重试'); 
      })
     }
  } 



  yanzheng(){           //获取验证码
    var b=document.getElementById('a');
    b.style.backgroundColor="#f5f5f5";
    var telreg = /^((1[3578][0-9]{1})+\d{8})$/; //手机号合法性验证
    if(this.zhucetel==null||this.zhucetel.length !==11){
      this.presentAlert('请正确输入11位手机号！');
    }else if(!telreg.test(this.zhucetel)){
      this.presentAlert('请正确输入合法手机号！');
    }else {
        this.http.get("http://www.zhuoran.fun:3000" + "/verify?stu_phone=" + this.zhucetel ).subscribe(data => {
        console.log(data);
        this.getCode();
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
  settime() {
    if (this.verifyCode.countdown == 1) {
    this.verifyCode.countdown = 60;
    this.verifyCode.verifyCodeTips = "获取验证码";
    this.verifyCode.disable = true;
    return;
    } else {
    this.verifyCode.countdown--;
    }

    this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
    setTimeout(() => {
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
