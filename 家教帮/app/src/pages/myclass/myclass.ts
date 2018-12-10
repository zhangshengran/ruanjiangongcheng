import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myclass',
  templateUrl: 'myclass.html',
})
export class MyclassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback1(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyclassPage');
  }

}
