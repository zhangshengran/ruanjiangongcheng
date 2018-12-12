import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import'rxjs/add/operator/map';
//import { HttpParams } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import $ from 'jquery'; //需要引入jquery插件

/**
 * Generated class for the OpenlessonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-openlesson',
  templateUrl: 'openlesson.html',
})
export class OpenlessonPage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr1=[];  //学生
  arr2=[];  //教师
  //date = new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
  getVideo(){
    this.http.get('http://www.zhuoran.fun:3000/select_video' ).subscribe(res =>{
      // console.log(Object(res));
      // this.arr1[0] = res[0];
      // console.log(this.arr1);
      
      for(var i = 0;i<=res['length']-1;i++){//判断发送过来的视频有多少个
        this.arr1[i] = res[i];//赋值到学生专区的数组中
        this.arr2[i] = res[i];//赋值到教师专区的数组中
        //----------------转换时间格式---------------
        var time = res[i].course_time;
        console.log(time)
        //time.toLocaleString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
        //time = new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')//现在时间。。。。
        time = new Date(res[i].course_time).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        res[i].course_time = time;
        console.log(time);
        var video=document.getElementsByTagName('video');
        for(var j=0; j<this.arr1.length; j++) {
          $(function($){ 
          $(".video-play").on("loadstart", function (e) {
            console.log('bb');
            var obj = e.target;  //获取video标签
            //console.log(obj)
            var canvas = document.createElement("canvas");
            var currentTime=obj.currentTime.toFixed(1);
            console.log(this.currentTime);
           
            canvas.width =obj.width;
            canvas.height = obj.height ;
            canvas.setAttribute("crossOrigin",'*');
            obj.setAttribute("crossOrigin",'*'); 
           // console.log(canvas.attributes); //查看属性
            canvas.getContext('2d').drawImage(obj, 0, 0, canvas.width, canvas.height);
            obj.setAttribute("poster",canvas.toDataURL("image/png")); // 解析图片格式
            console.log(obj)
            console.log('haha');
         } )
        })
      }
      }
      console.log(this.arr1);
      console.log(this.arr2);

    }, err =>{
      console.log(err);
    })
  }
  ionViewDidLoad(){
    this.getVideo();
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient, ) {
  }


}
