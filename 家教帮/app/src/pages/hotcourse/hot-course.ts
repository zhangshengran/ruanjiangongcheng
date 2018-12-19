import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { TeachersPage} from '../teachers/teachers';
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
  
  // arr0=['','','','','']; //以后要传数据
  // arr1=['','','','','','','']; //以后要传数据
  // arr2=['','','','','','']; //以后要传数据
  // arr3=['','','']; //以后要传数据
  // arr4=['','','','','']; //以后要传数据
  // arr5=['','','','']; //以后要传数据
  // arr6=['','','']; //以后要传数据
  // arr7=['','','','','','','','','']; //以后要传数据
  // arr8=['','','','','']; //以后要传数据
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  id = this.navParams.data.ids;  //接收home页面传递过来的参数  this.data返回的是{ids: 2}
  //isActive=0; 
  course;
  arr9;;
  isActive=this.id-1;  //一开始时赋值 
  isClick(i){
    this.isActive=i;
    if(this.isActive==0){
      this.course='语文'
    }else if(this.isActive==1){
      this.course='数学';
    }else if(this.isActive==2){
      this.course='英语';
    }else if(this.isActive==3){
      this.course='物理';
    }else if(this.isActive==4){
      this.course='化学';
    }else if(this.isActive==5){
      this.course='生物';
    }else if(this.isActive ==6){
      this.course='历史'
    }else if(this.isActive==7){
      this.course='地理';
    }else{
      this.course='政治';
    }
    this.http.get('http://www.zhuoran.fun:3000/search'+'?search_txt='+this.course).subscribe(res=>{ 
      console.log(res);
      this.arr9=res;
    },err=>{
      console.log("ERROR:",err);
    })
  }
  detail(idx){
    this.navCtrl.push(TeachersPage,{  //通过将数据传递给push方法的第二个参数，来将数据传递给下一个页面。
      tea_id:this.arr9[idx].tea_id,
      tea_content:this.arr9[idx]
    });
  }
  ionViewWillEnter(){
    console.log(this.isActive);
    if(this.isActive==0){
      this.course='语文'
    }else if(this.isActive==1){
      this.course='数学';
    }else if(this.isActive==2){
      this.course='英语';
    }else if(this.isActive==3){
      this.course='物理';
    }else if(this.isActive==4){
      this.course='化学';
    }else if(this.isActive==5){
      this.course='生物';
    }else if(this.isActive ==6){
      this.course='历史'
    }else if(this.isActive==7){
      this.course='地理';
    }else{
      this.course='政治';
    }
    this.http.get('http://www.zhuoran.fun:3000/search'+'?search_txt='+this.course).subscribe(res=>{ 
      console.log(res);
      this.arr9=res;
    },err=>{
      console.log("ERROR:",err);
    })
   
    

  }

}
