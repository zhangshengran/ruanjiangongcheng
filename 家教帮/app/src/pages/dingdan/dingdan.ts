import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AffirmPage } from '../affirm/affirm';
import { TalkPage } from '../talk/talk';

/**
 * Generated class for the DingdanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dingdan',
  templateUrl: 'dingdan.html',
})

export class DingdanPage {
  constructor(public navCtrl: NavController) {
  }
  affirm(){
    this.navCtrl.push(AffirmPage);
  }
  gotalk(){
    this.navCtrl.push(TalkPage);
  }
}
