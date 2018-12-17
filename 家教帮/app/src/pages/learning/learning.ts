import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublishPage} from '../publish/publish';
import {HttpClient} from "@angular/common/http";
import'rxjs/add/operator/map';
/**
 * Generated class for the LearningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-learning',
  templateUrl: 'learning.html',
})
export class LearningPage {
  arr = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,) {
  }
  goback3(){
    this.navCtrl.pop();
  }
  go8(){
    this.navCtrl.push(PublishPage);
  }
  arr1=[];
  getpublic(){
    this.http.get('http://www.zhuoran.fun:3000/getAllNotes').subscribe(res=>{
      for(var i = 0;i<=res['length']-1;i++){
        this.arr[i] = res[i];
      }
      for(var i = 0;i<5;i++){
        this.arr1[i] = res[i];
      }
      console.log(this.arr);
    },err=>{
      console.log("ERROR:",err);
    })
  }
  ionViewWillEnter() {
    this.getpublic();
  }
  temp=0;
  doInfinite(infiniteScroll) {
    var that=this;
    this.temp=this.temp+1;
    setTimeout(() => {
      for (let i = 0+this.temp*5; i <5+this.temp*5; i++) {
        if(i>=that.arr.length){
          infiniteScroll.enable(false);   //没有数据的时候隐藏 ion-infinate-scroll
          break;
        }
        this.arr1.push(that.arr[i]);
      }
     infiniteScroll.complete();
    }, 500);
  }
}
