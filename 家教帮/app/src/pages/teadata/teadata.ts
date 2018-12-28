import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the TeadataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation 

 for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teadata',
  templateUrl: 'teadata.html',
})
export class TeadataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
    this.tea_content=this.navParams.data.tea_content;
    // console.log(this.tea_content);
  }
  tea_content;
  tea_id;
  tea_name=this.navParams.data.tea_content.tea_name;
  tea_age=this.navParams.data.tea_content.tea_age;
  tea_sex=this.navParams.data.tea_content.tea_sex;
  tea_grade=this.navParams.data.tea_content.tea_grade;
  tea_email=this.navParams.data.tea_content.tea_email;
  stu_grade=this.navParams.data.tea_content.stu_grade;
  stu_courses=this.navParams.data.tea_content.stu_courses;
  tea_major=this.navParams.data.tea_content.tea_major;
  tea_money=this.navParams.data.tea_content.tea_money+'/h';
  tea_school=this.navParams.data.tea_content.tea_school;
  remark=this.navParams.data.tea_content.remark;

  private encodeHttpParams(params: any): any {
    if (!params) return null;
    return new HttpParams({fromObject: params});
  }
  affirm(){
  console.log(this.tea_name);
  console.log(typeof(this.tea_name));
  if(typeof this.tea_name==undefined){
    this.tea_name=window.localStorage.getItem('pea_name');
  }
  console.log(this.tea_name);
    var params = {
      tea_id:window.localStorage.getItem('teacherID'),
      tea_name:this.tea_name,
      tea_age:this.tea_age,
      tea_sex:this.tea_sex,
      tea_email :this.tea_email,
      stu_grade :this.stu_grade,
      stu_courses :this.stu_courses,
      tea_school :this.tea_school,
      tea_major:this.tea_major,
      tea_money:this.tea_money,
      tea_grade:this.tea_grade, 
      remark:this.remark
   }
   this.http.post('http://www.zhuoran.fun:3000/updata_tea ',this.encodeHttpParams(params)).subscribe(res => {
             console.log("res:",res);
             this.navCtrl.pop();
             window.localStorage.setItem('pea_name',this.tea_name)
             window.localStorage.setItem('pea_age',this.tea_age)
             window.localStorage.setItem('pea_sex',this.tea_sex)
             window.localStorage.setItem('pea_grade',this.tea_grade)
             window.localStorage.setItem('pea_email',this.tea_email)
             window.localStorage.setItem('pea_school',this.tea_school)
             window.localStorage.setItem('pea_major',this.tea_major)
             window.localStorage.setItem('stu_grade',this.stu_grade)
             window.localStorage.setItem('stu_courses',this.stu_courses)
             window.localStorage.setItem('tea_money',this.tea_money);
             window.localStorage.setItem('remark',this.remark)
        },
       error=>{
        console.log("error:",error);
       });
       
    
  }
}
