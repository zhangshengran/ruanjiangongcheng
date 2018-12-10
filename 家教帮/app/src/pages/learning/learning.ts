import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublishPage} from '../publish/publish';

/**
 * Generated class for the LearningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning',
  templateUrl: 'learning.html',
})
export class LearningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback3(){
    this.navCtrl.pop();
  }
  go8(){
    this.navCtrl.push(PublishPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningPage');
  }

}
