import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studata',
  templateUrl: 'studata.html',
})
export class StudataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  affirm(){
    this.navCtrl.pop();
  }

}
