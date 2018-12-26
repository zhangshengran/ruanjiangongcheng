import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import { AlertController } from 'ionic-angular';
//import { HomePage} from '../home/home';

/**
 * Generated class for the BeginclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beginclass',
  templateUrl: 'beginclass.html',
})
export class BeginclassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public alertCtrl: AlertController) {
  }
  identy;
  is_tea;
  arr;
  stu_id;
  data;
  goback(){
    this.navCtrl.pop();
  }
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle:data,
      buttons: ['Ok'],
    });
    alert.present();
  }
    ionViewDidLoad() {
      console.log('ionViewDidLoad MycoursePage');
      this.identy=window.localStorage.getItem('teacherID');
      if(this.identy=='null'){
          this.stu_id=window.localStorage.getItem('tokenID');
          console.log(window.localStorage.getItem('tokenID'));
          console.log(this.stu_id);
          this.http.get('http://www.zhuoran.fun:3000'+'/select_order_stu?stu_id='+this.stu_id).subscribe(res => {
               console.log("res:",res);
               this.arr=res;
               if(res['length']==0){
                  this.presentAlert('您目前还没有课程哦！');     
                  // this.navCtrl.pop();
             }
             
          },
         error=>{
          console.log("error:",error)
         });
      }else{
        console.log(window.localStorage.getItem('tokenID'));
          this.stu_id=window.localStorage.getItem('teacherID');
           console.log(this.stu_id);
          this.http.get('http://www.zhuoran.fun:3000'+'/select_order_tea?tea_id='+this.stu_id).subscribe(res => {
            console.log("res:",res);
            this.arr=res;
            if(res['length']==0){
              // this.data='您目前还没有课程哦！';
                this.presentAlert('您目前还没有课程哦！');

              }
              // this.navCtrl.pop();
           },
           error=>{
             console.log("error:",error)
           });
  
      }
    }

}
