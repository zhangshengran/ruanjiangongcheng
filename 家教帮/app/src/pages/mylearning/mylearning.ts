import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublishPage} from '../publish/publish';
import {HttpClient} from "@angular/common/http";
import'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-mylearning',
  templateUrl: 'mylearning.html',
})
export class MylearningPage {
  arr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,) {
  }
  goback4(){
    this.navCtrl.pop();
  }
  // go8(){
  //   this.navCtrl.push(PublishPage);
  // }
  stu_id =window.localStorage.getItem('tokenID');

  getpublic(){
    
    console.log(this.stu_id);
    this.http.get('http://www.zhuoran.fun:3000/getOwnNotes'+'?stu_id='+this.stu_id).subscribe(res=>{
      console.log(res);
      for(var i = 0;i<=res['length']-1;i++){
        this.arr[i] = res[i];
      }
      console.log(this.arr);
    },err=>{
      console.log("ERROR:",err);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MylearningPage');
    this.getpublic();
  }

}
