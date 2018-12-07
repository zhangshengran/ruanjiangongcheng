import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyPage } from '../my/my';

/**
 * Generated class for the MyprovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myprove',
  templateUrl: 'myprove.html',
})
export class MyprovePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tijiao(){
    this.navCtrl.push(MyPage);
  }
  goback(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyprovePage');
  }

}
