import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JobsPage } from '../jobs/jobs';
import { JobPage } from '../job/job';

/**
 * Generated class for the MyjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myjob',
  templateUrl: 'myjob.html',
})
export class MyjobPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback2(){
    this.navCtrl.popToRoot();
  }
  go6(){
    this.navCtrl.push(JobsPage);
  }
  go2(){
    this.navCtrl.push(JobPage);
  }
  go7(){
    this.navCtrl.push(JobPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyjobPage');
  }

}
