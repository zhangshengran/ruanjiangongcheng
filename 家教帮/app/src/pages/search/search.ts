import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { TeachersPage} from '../teachers/teachers';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }
  text;
  arr;
search(){
  this.http.get('http://www.zhuoran.fun:3000/search'+'?search_txt='+this.text).subscribe(res=>{ 
    console.log(res);
    console.log(this.text);
    this.arr=res;
  },err=>{
    console.log("ERROR:",err);
  })
}
isClick(i){
  this.navCtrl.push(TeachersPage,{  //通过将数据传递给push方法的第二个参数，来将数据传递给下一个页面。
    tea_id:this.arr[i].tea_id,
    tea_content:this.arr[i]
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
