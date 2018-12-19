import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import $ from 'jquery';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  myVideo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,) {
    
  }
  arr1=[];
  getVideo(){
    this.http.get('http://www.zhuoran.fun:3000/video' ).subscribe(res=>{
      console.log(res);
      for(var i = 0;i<=res['length']-1;i++){//判断发送过来的视频有多少个
        this.arr1[i] = res[i];
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
    },err=>{
      console.log(err);
    })
  }
  ionViewDidLoad() {
    this.getVideo()
  }

}
