import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { LocationPage } from '../location/location';
//import { KechengPage } from '../kecheng/kecheng';
import { BeginclassPage} from '../beginclass/beginclass';
import { MyclassPage} from '../myclass/myclass';
import { TeacherPage} from '../teacher/teacher';
import { MyjobPage} from '../myjob/myjob';
import { LearningPage} from '../learning/learning';
import { HotCoursePage } from '../hotcourse/hot-course';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  i=Number;
  id=Number;
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }

  go(){
    this.navCtrl.push(LocationPage);
  }
  go1(){
    this.navCtrl.push(BeginclassPage);
  }
  go2(){
    this.navCtrl.push(MyclassPage);
  }
  go3(){
    this.navCtrl.push(TeacherPage);
  }
  go4(){
    this.navCtrl.push(MyjobPage);
  }
  go5(){
    this.navCtrl.push(LearningPage);
  }
  isClick(i){
    this.id=i;
    this.navCtrl.push(HotCoursePage,{  //通过将数据传递给push方法的第二个参数，来将数据传递给下一个页面。
      ids:this.id
    });
  }
  ionViewWillEnter(){
    this.slides.startAutoplay();
    this.slides.autoplayDisableOnInteraction = false;
  }
  ionViewWillLeave(){
    this.slides.stopAutoplay();
  }
}
