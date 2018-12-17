import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MydataPage } from '../mydata/mydata';
import { MycoursePage } from '../mycourse/mycourse';
import { MytalkPage } from '../mytalk/mytalk';
import { MysettingPage } from '../mysetting/mysetting';
import 'rxjs/add/operator/toPromise';
import { MyimgPage } from '../myimg/myimg';
import { StudataPage } from '../studata/studata';
import { TeadataPage } from '../teadata/teadata';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  id=Number;
  head: string;
  pea_name: string;
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }
  godata(id){
    if(id == 1){
      this.navCtrl.push(StudataPage);
    }else if(id == 0){
      this.navCtrl.push(TeadataPage);
    }
  };
    
  gocourse(){
    this.navCtrl.push(MycoursePage);
  }
  goprove(){
    this.navCtrl.push(MydataPage);
  }
  gotalk(){
    this.navCtrl.push(MytalkPage);
  }
  gosetting(){
    this.navCtrl.push(MysettingPage);
  }
  
  goimg(){
    this.navCtrl.push(MyimgPage);
  }
  ionViewWillEnter() {  //一进来时，就会调用,变量就会及时更新
    this.pea_name=window.localStorage.getItem('pea_name');  //名称
    this.head=window.localStorage.getItem('head'); //头像的路径
}
}
