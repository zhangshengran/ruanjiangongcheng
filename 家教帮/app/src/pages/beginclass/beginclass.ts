import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage} from '../home/home';

/**
 * Generated class for the BeginclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beginclass',
  templateUrl: 'beginclass.html',
})
export class BeginclassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BeginclassPage');
  }

}
