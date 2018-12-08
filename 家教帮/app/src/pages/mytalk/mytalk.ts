import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PjxiangqingPage } from '../pjxiangqing/pjxiangqing';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback(){
    this.navCtrl.pop();
  }
  goxiangqing(){
    this.navCtrl.push(PjxiangqingPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MytalkPage');
  }

}
