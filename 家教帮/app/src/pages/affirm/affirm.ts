import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TalkPage } from '../talk/talk';
import {HttpClient} from "@angular/common/http";
/**
 * Generated class for the AffirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affirm',
  templateUrl: 'affirm.html',
})
export class AffirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public alertCtrl: AlertController,) {
  }
  tea_content;
  teacherID;
  class_time;
  order_address;
  order_time;
  gotalk(){
    this.navCtrl.push(TalkPage)
  }
  return(){
    this.navCtrl.popToRoot();
  }
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle:data,
      buttons: ['Ok'],
    });
    alert.present();
  }
  order_number;
  ionViewWillEnter(){
    var that=this;
     this.tea_content=this.navParams.data.tea_content;
     this.teacherID=this.navParams.data.tea_content.tea_id;
    this.class_time=this.navParams.data.class_time;
    this.order_address=this.navParams.data.order_address;
    this.order_time=this.navParams.data.order_time;
    console.log(this.teacherID);
    this.teacherID=window.localStorage.getItem('teacherID');
    this.http.get('http://www.zhuoran.fun:3000'+'/select_order_tea?tea_id='+this.teacherID).subscribe(res => {

             console.log("res:",res);
            that.order_number=res['order_id'];
            
         if(res['status']==1||res['status']=='1'){
               that.presentAlert(res['message'])
           }
        },error=>{
          that.presentAlert('数据库连接错误，请重试');
       });
  }

}
