import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { BeginclassPage} from '../beginclass/beginclass';
import { MyclassPage} from '../myclass/myclass';
import { TeacherPage} from '../teacher/teacher';
import { MyjobPage} from '../myjob/myjob';
import { LearningPage} from '../learning/learning';
import { HotCoursePage } from '../hotcourse/hot-course';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchPage } from '../search/search';
import { TeachersPage} from '../teachers/teachers';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController,public http:HttpClient) {
  }
  i;
  id;
  @ViewChild(Slides) slides: Slides;
  head: string;
  pea_name: string;
  stu_id;
  arr;
  arr1 = [];
  tea_id;
  isActive;
  ionViewWillEnter(){
    this.pea_name=window.localStorage.getItem('pea_name');
    this.stu_id =window.localStorage.getItem('tokenID');
    this.tea_id =window.localStorage.getItem('teacherID');
    if(this.tea_id=='null'||this.tea_id==null){
      this.isActive=0;
    }else{
      this.isActive=1;
    }
    this.getcircle();
    this.getteacher();
   // this.slides.startAutoplay();
}
  ionViewDidLeave(){
    //this.slides.stopAutoplay(); //离开时，轮播图停止播放
  }
  getcircle(){  //如果是老师，得到老师发的第一条
    this.http.get('http://www.zhuoran.fun:3000/getAllNotes').subscribe(res=>{
      console.log(res);
      this.arr1 = res[0];//将传来的第一个数据传到这儿
      console.log(this.arr1);
    },err=>{
      console.log("ERROR:",err);
    })
  }
  getteacher(){
    this.http.get('http://www.zhuoran.fun:3000/select_tea').subscribe(res => {
      console.log("res:",res);
      this.arr=res;
      this.arr=this.arr.slice(0,5);
     },
     error=>{
       console.log("error:",error)
     });
  }
  detail(idx){
    this.navCtrl.push(TeachersPage,{  //通过将数据传递给push方法的第二个参数，来将数据传递给下一个页面。
      tea_id:this.arr[idx].tea_id,
      tea_content:this.arr[idx]
    });
  }
  goSearch(){   //搜索框
    this.navCtrl.push(SearchPage);
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
  row=['1111111111111','222211111111111'];
 

}
