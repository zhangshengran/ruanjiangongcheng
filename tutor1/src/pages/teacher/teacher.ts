import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeachersPage} from '../teachers/teachers';

/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goback(){
    this.navCtrl.popToRoot();
  }
  go2(){
    this.navCtrl.push(TeachersPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
  }

}
