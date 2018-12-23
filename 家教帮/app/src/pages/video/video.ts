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
  arr0=[];
  img=[];
  getVideo(){
    var that=this;
    this.http.get('http://www.zhuoran.fun:3000/video' ).subscribe(res=>{
      console.log(res);
      for(var i = 0;i<=res['length']-1;i++){//判断发送过来的视频有多少个
        this.arr1[i] = res[i];
        this.img[i]=res[i].course_img;
        //----------------转换时间格式---------------
        //var time = res[i].course_time;
        //console.log(time)
      }
        //time.toLocaleString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
        //time = new Date(+new Date()+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')//现在时间。。。。
        //time = new Date(res[i].course_time).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
        //res[i].course_time = time;
        //console.log(time);
      
        $(function($){ 
          $("video").on("loadstart", function (e) {
            var obj = e.target;
            console.log(obj);
            that.arr0.push(obj);
            console.log(that.arr0);
            for(var j=0 ;j<that.arr0.length ;j++){
              that.arr0[j].poster=that.img[j];
            }
          })
        })

        /*
        while(that.arr0!=[]){
          for(var j=0 ;j<that.arr0.length ;j++){
            var u=0;
            console.log(that.arr0[j]);
            that.arr0[j].onclick=function(e){
              console.log(e.target);
              console.log('haha');
              console.log(j);
              that.arr0[u].trigger('play');;
              //that.arr0[u].currentTime=0;
              //that.arr0[j].trigger('play');
                u=j;
            }
          }
        }
      
       
       var that=this;
       $(function($){ 
        
        var u=0;//标记上一个视频
        $("video").on("loadstart", function (e) {
          var obj = e.target;
          console.log(obj);
          that.arr0.push(obj);
          console.log(that.arr0)
        for(let j=0 ;j<that.arr0.length ;j++){
          that.arr0[j].click(function(){
           console.log('aa');
           that.arr0[u].trigger("play");//让上一个video暂停
           that.arr0[u].currentTime=0//让上一个video播放进度回到0
           that.arr0[j].trigger("pause");//让当前点击的video播放
          u=j; //让当前数赋值给
              
        })
      }
      })
    })
    
            
          $("#asd").on("loadstart", function (e) {
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
         } )*/
      
      
    },err=>{
      console.log(err);
    })
  }
  u=0;
  control(idx){
    console.log(this.arr0);
    this.arr0[this.u].pause();
    this.arr0[idx].play();
    this.u=idx;
  }
  ionViewDidLoad() {
    this.getVideo()
  }

}
