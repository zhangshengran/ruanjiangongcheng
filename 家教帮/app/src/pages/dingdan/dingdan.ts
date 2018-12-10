import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams, AlertController} from 'ionic-angular';
import { AffirmPage } from '../affirm/affirm';
import { TalkPage } from '../talk/talk';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * Generated class for the DingdanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dingdan',
  templateUrl: 'dingdan.html',
})

export class DingdanPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public alertCtrl: AlertController) {
  }
  tea_id:number = this.navParams.data.tea_id;  //接收teachers页面传递过来的参数 
  tea_content=this.navParams.data.tea_content;
  stu_id:number=parseInt(window.localStorage.getItem('tokenID'));
  class_time:string;
  order_address:string;
  order_time:string=new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate()+' '+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();

  private encodeHttpParams(   params: any): any {  //解析成json字符串
    if (!params) return null;
    return new HttpParams({fromObject: params});
  }
  presentAlert(data) {  //提示框
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle:data,
      buttons: ['Ok'],
    });
    alert.present();
  }

  affirm(){
    console.log("教师id："+this.tea_id);
    console.log("学生id："+this.stu_id);
    console.log("上课时间："+this.class_time);
    console.log("上课地址："+this.order_address);
    console.log("下单时间："+this.order_time);

    var params = {
      stu_id:this.stu_id,
      tea_id:this.tea_id,
      class_time:this.class_time,
      order_address:this.order_address,
      order_time:this.order_time
    }
    this.http.post('http://www.zhuoran.fun:3000/order_set',this.encodeHttpParams(params)).subscribe(res => {
        console.log(res);
        this.navCtrl.push(AffirmPage);
        this.presentAlert(res['message']);
      },error =>{
        this.presentAlert('服务器连接错误');
      })
    
  }
  
  gotalk(){
    this.navCtrl.push(TalkPage);
  }
}
