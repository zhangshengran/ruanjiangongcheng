import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
    
  }
  
  gologinPage(){
    window.localStorage.clear(); //清除所有缓存
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MysettingPage');
  }

}
