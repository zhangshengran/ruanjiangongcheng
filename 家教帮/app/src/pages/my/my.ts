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
  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
    //this.id = this.navParams.get('id');
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
