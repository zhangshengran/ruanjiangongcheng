import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
/**
 * Generated class for the NewsnextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsnext',
  templateUrl: 'newsnext.html',
})
export class NewsnextPage {
  data:any;
  arr=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
    this.data = navParams.get('idx');
  }
  getNews(){
    this.http.get('http://www.zhuoran.fun:3000/news').subscribe(res=>{
      console.log(res);
        this.arr[0] = res[this.data];

    },err=>{
      console.log(err);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsnextPage');
    this.getNews()
  }

}
