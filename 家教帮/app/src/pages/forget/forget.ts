import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback(){
    this.navCtrl.pop();
  }
  gologin(){
    this.navCtrl.push(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

}
