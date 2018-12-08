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
  goback4(){
    this.navCtrl.pop();
  }
  gotalk(){
    this.navCtrl.push(TalkPage);
  }
  godingdan(){
    this.navCtrl.push(DingdanPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachersPage');
  }

}
