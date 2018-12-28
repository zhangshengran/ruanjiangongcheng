import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
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
import { HttpClient} from '@angular/common/http';
import { SearchPage } from '../search/search';
import { TeachersPage} from '../teachers/teachers';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(public navCtrl: NavController,public http:HttpClient, public navParams: NavParams,public alertCtrl: AlertController) {
  }
  i;
  id;
  @ViewChild(Slides) slides:Slides;
  head: string;
  pea_name: string;
  tea_id=this.navParams.data.tea_id;//通过login页传参，不然tea_id一进入tabs页为null，即使获取了缓存
  arr;
  arr1 = [];
  arr2=[];
  arr3=[];
  stu_id;
  isActive;
  ionViewWillEnter(){
    this.pea_name=window.localStorage.getItem('pea_name');
    this.stu_id =window.localStorage.getItem('tokenID');
    this.tea_id =window.localStorage.getItem('teacherID');
    console.log(this.tea_id);
    if(this.tea_id=='null'||this.tea_id==null){
      this.isActive=1; //学生
      console.log('学生');
    }else{
      this.isActive=0; //老师
      console.log('老师');
    }
    this.getcircle();
    this.getteacher();
    this.getlun();
    this.gettoutiao();
}
slidess=['assets/imgs/home1.jpg','../../assets/imgs/home2.jpg','../../assets/imgs/home3.jpg','../../assets/imgs/home4.jpg','../../assets/imgs/home5.jpg']

  getcircle(){  
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
  getlun(){
    this.http.get('http://www.zhuoran.fun:3000/lun').subscribe(res=>{
      if(res['status']==1||res['status']=='1'){
        this.presentAlert('轮播图'+res['message']);
      }else{
        console.log(res);
      for(var i=0;i<res['length'];i++){
      this.arr2[i]=res[i];
      }
    }
    },error=>{
      console.log(error);
    })
  }
  gettoutiao(){
    this.http.get('http://www.zhuoran.fun:3000/toutiao').subscribe(res=>{
      if(res['status']==1||res['status']=='1'){
        this.presentAlert('头条'+res['message']);
      }else{
        console.log(res);
      for(var i=0;i<res['length'];i++){
      this.arr3[i]=res[i];
      }
    }
    },error=>{
      console.log(error);
    })
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
  row=['家教帮祝所有老师元旦快乐！','家教帮祝所有学生学业有成，元旦快乐！'];
  //------------提示框---------
presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: '提示！',
    subTitle:data,
    buttons: ['Ok'],
  });
  alert.present();
}

}
