import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App, ViewController } from 'ionic-angular';
import { TeachersPage} from '../teachers/teachers';
import'rxjs/add/operator/map';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
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
  arr:any;
  id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
 
  goback(){
    this.navCtrl.popToRoot();
  }
  // go2(){
  //   this.navCtrl.push(TeachersPage);
  // }
  isClick(i){
    this.id=i;
    this.navCtrl.push(TeachersPage,{  //通过将数据传递给push方法的第二个参数，来将数据传递给下一个页面。
      tea_id:this.id,
      tea_content:this.arr[i-1043]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
    this.http.get('http://www.zhuoran.fun:3000/select_tea').subscribe(res => {
     console.log("res:",res);
      this.arr=res;
      // console.log(this.arr[0]);
    },
    error=>{
      console.log("error:",error)
    });
  }
}
