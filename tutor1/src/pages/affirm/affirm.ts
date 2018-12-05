import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TalkPage } from '../talk/talk';

/**
 * Generated class for the AffirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-affirm',
  templateUrl: 'affirm.html',
})
export class AffirmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotalk(){
    this.navCtrl.push(TalkPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AffirmPage');
  }

}
