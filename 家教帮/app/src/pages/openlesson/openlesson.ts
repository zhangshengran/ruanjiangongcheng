import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OpenlessonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-openlesson',
  templateUrl: 'openlesson.html',
})
export class OpenlessonPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr1=['','',''];  //学生
  arr2=['','',''];  //教师
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
