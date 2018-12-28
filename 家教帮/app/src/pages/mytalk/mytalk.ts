import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PjxiangqingPage } from '../pjxiangqing/pjxiangqing';
import { HttpClient, HttpParams } from '@angular/common/http';
/**
 * Generated class for the MytalkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytalk',
  templateUrl: 'mytalk.html',
})
export class MytalkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public alertCtrl: AlertController,) {
  }
  goback(){
    this.navCtrl.pop();
  }
  goxiangqing(){
    this.navCtrl.push(PjxiangqingPage);
  }
  stu_id=window.localStorage.getItem('tokenID');
  arr=[];
  remark;
  //------------提示框---------
presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: '提示！',
    subTitle:data,
    buttons: ['Ok'],
  });
  alert.present();
}
//--------包装成为json数据--------
private encodeHttpParams(params: any): any {
  if (!params) return null;
  return new HttpParams({fromObject: params});
}
  affirm(){
    var params = {
      adv_user:this.stu_id,
      adv_content:this.remark,
      adv_time:new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate()+' '+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
     }
    this.http.post('http://www.zhuoran.fun:3000/writeAdvice',this.encodeHttpParams(params)).subscribe(res => {
      if(res['status']==1||res['status']=='1'){
        this.presentAlert(res['message']);
      }else{
        this.presentAlert(res['message']);}
    },  
   error=>{
     console.log("error:",error);
    })
  }
  ionViewWillEnter(){
    this.http.get('http://www.zhuoran.fun:3000'+'/advicesel?adv_user='+this.stu_id).subscribe(res => {
      if(res['status']==1){
        this.presentAlert(res['message']);
      }else{
      console.log("res:",res);
      for(var i = 0;i<=res['length']-1;i++){
        this.arr[i] = res[i];
        
        if(this.arr[i]['reply']==null||this.arr[i]['reply']=='null'){
          this.arr[i]['reply']='还未给您回复建议！';
        }else{
          this.arr[i]['reply'];
          console.log(this.arr[i]['reply']);
        }
        
      }
    }
    },  
   error=>{
     console.log("error:",error);
    })
  }
}
