import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MydataforstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mydataforstudent',
  templateUrl: 'mydataforstudent.html',
})
export class MydataforstudentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MydataforstudentPage');
  }

}
