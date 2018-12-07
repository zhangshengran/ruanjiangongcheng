import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgetPage } from '../forget/forget';
import { Http } from "@angular/http";
import'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
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
  view = ViewChild;
  isActive = true;
  logintel:Number;
  loginpassword: Number;
  zhucetel: Number;
  yanzhengma: Number;
  zhucepassword: Number;
  errorMessage: string;
  
  isClick(i){
    this.isActive = i;
  }

  constructor(private httpt:HttpClient,public http:Http, public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goforget(){
    this.navCtrl.push(ForgetPage);
  }
  gobpage(){
    this.navCtrl.popToRoot();

    this.http.post('http://localhost:3000/customers',{
      "name":this.logintel,
      "password":this.loginpassword
    }).subscribe(res => {
      console.log(res);
      //this.logintel = res.toString();
    },error =>{
      console.log("Error",error)
    })
    const params = new HttpParams().set('_page', "1").set('_limit', "1");
    this.http.get("http://localhost:3000/customers",{params});
    
  }
  gologin(){
    this.navCtrl.push(LoginPage);
    console.log("用户名："+this.zhucetel);
    console.log("验证码："+this.yanzhengma);
    console.log("密码："+this.zhucepassword);
  }
  
 
  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

}
