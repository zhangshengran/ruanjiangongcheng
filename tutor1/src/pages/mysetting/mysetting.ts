import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MysettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mysetting',
  templateUrl: 'mysetting.html',
})
export class MysettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  clear(){}//清除缓存信息
  gologinPage(){
    this.navCtrl.push(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MysettingPage');
  }

}
