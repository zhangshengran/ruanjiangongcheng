import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the StudataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studata',
  templateUrl: 'studata.html',
})
export class StudataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
    // console.log(this.stu_content);
  }
  stu_content=this.navParams.data.stu_content;
  stu_id;
  stu_name=window.localStorage.getItem('pea_name');
  stu_age=window.localStorage.getItem('pea_age');
  stu_sex=window.localStorage.getItem('pea_sex');;
  stu_grade=this.navParams.data.tea_content.stu_grade;
  // stu_phone;
  private encodeHttpParams(params: any): any {
    if (!params) return null;
    return new HttpParams({fromObject: params});
  }
  affirm(){
    var params = {
        stu_id:window.localStorage.getItem('tokenID'),
        stu_name:this.stu_name,
        stu_age:this.stu_age,
        stu_sex:this.stu_sex,
        stu_grade:this.stu_grade
     }
      this.http.post('http://www.zhuoran.fun:3000/updata_stu',this.encodeHttpParams(params)).subscribe(res => {
             console.log("res:",res);
             this.navCtrl.pop();
             window.localStorage.setItem('pea_name',this.stu_name)
             window.localStorage.setItem('pea_age',this.stu_age)
             window.localStorage.setItem('pea_sex',this.stu_sex)
             window.localStorage.setItem('pea_grade',this.stu_grade)
        },
       error=>{
        console.log("error:",error);
       });
       
    
  }

}
