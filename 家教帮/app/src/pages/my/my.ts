import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { MydataPage } from '../mydata/mydata';
import { MycoursePage } from '../mycourse/mycourse';
import { MyprovePage } from '../myprove/myprove';
import { MytalkPage } from '../mytalk/mytalk';
import { MysettingPage } from '../mysetting/mysetting';
import 'rxjs/add/operator/toPromise';
import { MydataforstudentPage } from '../mydataforstudent/mydataforstudent';

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
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    //this.id = this.navParams.get('id');
  }
  godata(id){
    if(id == 1){
      this.navCtrl.push(MydataPage)
    }else if(id == 0){
      this.navCtrl.push(MydataforstudentPage)
    }
  };
    
  gocourse(){
    this.navCtrl.push(MycoursePage);
  }
  goprove(){
    this.navCtrl.push(MyprovePage);
  }
  gotalk(){
    this.navCtrl.push(MytalkPage);
  }
  gosetting(){
    this.navCtrl.push(MysettingPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
