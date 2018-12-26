import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { NewsnextPage } from '../newsnext/newsnext';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  arr=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  getNew(){
    this.http.get('http://www.zhuoran.fun:3000/news').subscribe(res=>{
      console.log(res)
      for(var i = 0;i<=res['length']-1;i++){//判断发送过来的数据有多少个
        this.arr[i] = res[i];
      }
    },err=>{
      console.log(err)
    })
  }
  gonews(idx){
    this.navCtrl.push(NewsnextPage,{idx})
  }
  ionViewDidLoad() {
    this.getNew()
    console.log('ionViewDidLoad NewsPage');
  }

}
