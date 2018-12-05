import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PjxiangqingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pjxiangqing',
  templateUrl: 'pjxiangqing.html',
})
export class PjxiangqingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PjxiangqingPage');
  }

}
