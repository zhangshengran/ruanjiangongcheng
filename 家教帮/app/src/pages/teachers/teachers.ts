import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TalkPage } from '../talk/talk';
import { DingdanPage } from '../dingdan/dingdan';

/**
 * Generated class for the TeachersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachers',
  templateUrl: 'teachers.html',
})
export class TeachersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tea_id = this.navParams.data.tea_id;  //接收teacher页面传递过来的参数
  tea_content=this.navParams.data.tea_content;
  goback4(){
    this.navCtrl.pop();
  }
  gotalk(){
    this.navCtrl.push(TalkPage);
  }
  godingdan(){
    console.log(this.tea_content);
    this.navCtrl.push(DingdanPage,{
      tea_id:this.tea_id,     
      tea_content:this.tea_content

    });

  }
  ionViewDidLoad() {
   // console.log('ionViewDidLoad TeachersPage');
  }

}
