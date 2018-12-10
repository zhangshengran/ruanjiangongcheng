import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import 'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  fgtel: string;
  fgyanzheng: Number;
  fgpsw: string;
  fgpswagain: string;
  yzma: Number;
  a: string = '3';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }
  //----------包装成为json数据--------------
  private encodeHttpParams(params: any): any {
    if (!params) return null;
    return new HttpParams({ fromObject: params });
  }

  //------------提示框---------
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle: data,
      buttons: ['Ok'],
    });
    alert.present();
  }

  yanzheng() {           //获取验证码
    var b = document.getElementById('a');
    b.style.backgroundColor = "#f5f5f5";
    var telreg = /^((1[3578][0-9]{1})+\d{8})$/; //手机号合法性验证
    if (this.fgtel == null || this.fgtel.length !== 11) {
      this.presentAlert('请正确输入11位手机号！');
    } else if (!telreg.test(this.fgtel)) {
      this.presentAlert('请正确输入合法手机号！');
    } else {
      this.http.get("http://www.zhuoran.fun:3000" + "/verify?stu_phone=" + this.fgtel).subscribe(data => {
        console.log(data);
        this.getCode();
        this.yzma = data["tpl_value"];
      }, error => {
        this.presentAlert('您输入的手机号未注册！');
        console.log("Error", error);
      });
    }
  }


  goback() {
    this.navCtrl.pop();
  }
  gologin() {
    var telreg = /^((1[3578][0-9]{1})+\d{8})$/;   //验证手机号的合法性
    var pswreg = /^(\w){6,20}$/;//密码合法性验证
    if (this.fgtel == null || this.fgtel.length !== 11) {
      this.presentAlert('请正确输入11位手机号！');
    } else if (!telreg.test(this.fgtel)) {
      this.presentAlert('请正确输入合法的手机号！');
    } else {//判断密码
      if (this.fgpsw == null) {
        this.presentAlert('密码不能为空，请输入密码！');
      } else if (!pswreg.test(this.fgpsw)) {
        this.presentAlert('密码必须是6-20位数字、字母！');
      } else {//判断确认密码
        if (this.fgpswagain == null) {
          this.presentAlert('确认密码不能为空，请输入确认密码！');
        } else if (!pswreg.test(this.fgpswagain)) {
          this.presentAlert('确认密码必须是6-20位数字、字母！');
        } else if (this.fgpswagain != this.fgpsw) {
          this.presentAlert('确认密码与密码不符！');
        } else {
          if (this.yzma != this.fgyanzheng) {
            this.presentAlert('请输入正确验证码！');
          } else {

            var params = {
              phone: this.fgtel,
              password: this.fgpsw,
            }
            let loading = this.loadingCtrl.create({
              content: '修改中，请稍后...'
            });
            this.http.post('http://www.zhuoran.fun:3000/forget', this.encodeHttpParams(params)).subscribe(res => {
              loading.dismiss();
              if (res["status"] == 0) {
                this.presentAlert('修改成功');
                this.navCtrl.push(LoginPage);
              } else {
                this.presentAlert(res["message"]);
              }
            }, err => {
              loading.dismiss();
              this.presentAlert('服务器连接错误，请重试');
              console.log(err);
            })
          }
        }
      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
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
