import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import { AlertController } from 'ionic-angular';
//import { HomePage} from '../home/home';

/**
 * Generated class for the BeginclassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-beginclass',
  templateUrl: 'beginclass.html',
})
export class BeginclassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,public alertCtrl: AlertController) {
  }
  teacherID;
  is_tea;
  arr;
  stu_id;
  data;
  imgcourse;
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle:data,
      buttons: ['Ok'],
    });
    alert.present();
  }
    ionViewDidLoad() {
      var that=this;
      that.teacherID=window.localStorage.getItem('teacherID');
      that.stu_id=window.localStorage.getItem('tokenID');
      that
      if(that.teacherID=='null'||that.teacherID==null){
        console.log(this.stu_id);
        this.http.get('http://www.zhuoran.fun:3000'+'/select_order_stu?stu_id='+that.stu_id).subscribe(res => {
          console.log("res:",res);
          that.arr=res;
          //console.log(that.arr);
          if(res['length']==0){
              this.presentAlert('您目前还没有课程哦！');

        }else{
          for(var i=0;i<that.arr.length;i++){  //哪一科图片对应哪一科
            if(that.arr[i]['stu_courses']=='语文'){
              that.arr[i]['imgcourse']='../../assets/imgs/yuwen.png'; //插入图片键值对
            }else if(that.arr[i]['stu_courses']=='数学'){
              that.arr[i]['imgcourse']='../../assets/imgs/shuxue.png';
            }else if(that.arr[i]['stu_courses']=='英语'){
              that.arr[i]['imgcourse']='../../assets/imgs/yingyu.png';
            }else if(that.arr[i]['stu_courses']=='物理'){
              that.arr[i]['imgcourse']='../../assets/imgs/wuli.png';
            }else if(that.arr[i]['stu_courses']=='化学'){
              that.arr[i]['imgcourse']='../../assets/imgs/huaxue.png';
            }else if(that.arr[i]['stu_courses']=='生物'){
              that.arr[i]['imgcourse']='../../assets/imgs/shengwu.png';
            }else if(that.arr[i]['stu_courses']=='历史'){
              that.arr[i]['imgcourse']='../../assets/imgs/lishi.png';
            }else if(that.arr[i]['stu_courses']=='地理'){
              that.arr[i]['imgcourse']='../../assets/imgs/dili.png';
            }else{
              that.arr[i]['imgcourse']='../../assets/imgs/zhengzhi.png';
            }
            //console.log(that.arr[i]);
          }

            }
         },
         error=>{
           console.log("error:",error)
         });
      }else{
        console.log('教师');
          this.http.get('http://www.zhuoran.fun:3000'+'/select_order_tea?tea_id='+that.teacherID).subscribe(res => {
               console.log("res:",res);
               that.arr=res;
               if(res['length']==0){
                  this.presentAlert('您目前还没有课程哦！');
             }else{
              for(var i=0;i<that.arr.length;i++){  //哪一科图片对应哪一科
                if(that.arr[i]['stu_courses']=='语文'){
                  that.arr[i]['imgcourse']='../../assets/imgs/yuwen.png'; //插入图片键值对
                }else if(that.arr[i]['stu_courses']=='数学'){
                  that.arr[i]['imgcourse']='../../assets/imgs/shuxue.png';
                }else if(that.arr[i]['stu_courses']=='英语'){
                  that.arr[i]['imgcourse']='../../assets/imgs/yingyu.png';
                }else if(that.arr[i]['stu_courses']=='物理'){
                  that.arr[i]['imgcourse']='../../assets/imgs/wuli.png';
                }else if(that.arr[i]['stu_courses']=='化学'){
                  that.arr[i]['imgcourse']='../../assets/imgs/huaxue.png';
                }else if(that.arr[i]['stu_courses']=='生物'){
                  that.arr[i]['imgcourse']='../../assets/imgs/shengwu.png';
                }else if(that.arr[i]['stu_courses']=='历史'){
                  that.arr[i]['imgcourse']='../../assets/imgs/lishi.png';
                }else if(that.arr[i]['stu_courses']=='地理'){
                  that.arr[i]['imgcourse']='../../assets/imgs/dili.png';
                }else{
                  that.arr[i]['imgcourse']='../../assets/imgs/zhengzhi.png';
                }
                //console.log(that.arr[i]);
              }
             }
             
          },
         error=>{
          console.log("error:",error)
         });
  
      }
    }

}
