import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HotCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hot-course',
  templateUrl: 'hot-course.html',
})
export class HotCoursePage {
  arr=['语文','数学','英语','物理','化学','生物','历史','地理','政治'];
  
  arr0=['','','','','']; //以后要传数据
  arr1=['','','','','','','']; //以后要传数据
  arr2=['','','','','','']; //以后要传数据
  arr3=['','','']; //以后要传数据
  arr4=['','','','','']; //以后要传数据
  arr5=['','','','']; //以后要传数据
  arr6=['','','']; //以后要传数据
  arr7=['','','','','','','','','']; //以后要传数据
  arr8=['','','','','']; //以后要传数据
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  id = this.navParams.data.ids;  //接收home页面传递过来的参数  this.data返回的是{ids: 2}
  //isActive=0; 
  isActive=this.id-1;  //一开始时赋值 
  isClick(i){
    this.isActive=i;
  }

}
