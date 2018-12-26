import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { VideoPage } from '../video/video';
import { DataPage } from '../data/data';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LearingcirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learingcir',
  templateUrl: 'learingcir.html',
})
export class LearingcirPage {
  //----------------提示框-------------------
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle:data,
      buttons: ['Ok'],
    });
    alert.present();
  }
  //----------------提示框-------------------
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  gonews(){
    this.navCtrl.push(NewsPage)
  }
  govideos(){
    this.navCtrl.push(VideoPage)
  }
  godata(){
    this.navCtrl.push(DataPage)
  }
  gomore(){
    this.presentAlert('敬请期待！');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LearingcirPage');
  }

}
