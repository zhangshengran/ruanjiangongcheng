import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { FileTransfer, FileTransferObject}from'@ionic-native/file-transfer';//允许上载和下载文件
import { LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file'; //允许对驻留在设备上的文件进行读/写访问
import { DatamorePage } from '../datamore/datamore';
import { DatagaoPage } from '../datagao/datagao';
import { DatayouPage } from '../datayou/datayou';
/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {
  arr1=[];  //中考
  arr2=[];  //高考
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,private transfer: FileTransfer,private fileTransfer:FileTransferObject,public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,private file: File) {
    this.fileTransfer= this.transfer.create();
  }
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  goback1(){
    this.navCtrl.pop();
  }

  getfilezhong(){
    this.http.get("http://www.zhuoran.fun:3000"+"/learnFile?fileVerify=0").subscribe(res=>{
    console.log(res);
    for(var i = 0;i<=2;i++){//判断发送过来的数据有多少个
      this.arr1[i] = res[i];
    }

    },err=>{
      console.log('error',err)
    })
  }
  goZmore(){
    this.navCtrl.push(DatamorePage);
  }
  goGmore(){
    this.navCtrl.push(DatagaoPage);
  }
  goYmore(){
    this.navCtrl.push(DatayouPage);
  }
  getfilegao(){
    this.http.get("http://www.zhuoran.fun:3000"+"/learnFile?fileVerify=1").subscribe(res=>{
    console.log(res);
    for(var i = 0;i<=2;i++){//判断发送过来的数据有多少个
      this.arr2[i] = res[i];
    }

    },err=>{
      console.log('error',err)
    })
  }
  //------------提示框---------
presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: '提示！',
    subTitle:data,
    buttons: ['Ok'],
  });
  alert.present();
}

  ionViewDidLoad() {
    this.getfilezhong();
    this.getfilegao();
  }
  load_src;
  load_name;
  downloadzhong(idx) {
    //进度条
    console.log(typeof(this.arr1[idx]["file_name"]));
    console.log(typeof(this.arr1[idx]["file_src"]));
    this.load_src=this.arr1[idx]["file_src"];
    this.load_name=this.arr1[idx]["file_name"];
    let loading = this.loadingCtrl.create({
      content: '下载进度：0%',
     });
     loading.present();
     let now:number=0;
     this.fileTransfer.onProgress(ProgressEvent=>{
       if(ProgressEvent.lengthComputable){
         now=ProgressEvent.loaded/ProgressEvent.total*100;
       }
     });
     let timer=setInterval(()=>{
       loading.setContent("下载进度："+Math.floor(now)+"%");
       if(now>=99){
         clearInterval(timer);
       }
     },300);
     //文件下载
    this.fileTransfer.download(this.load_src,this.file.dataDirectory+this.load_name,true).then((entry) => {
      if(timer){clearInterval(timer);}
      loading.dismiss();
      this.presentAlert('下载成功');
      console.log(entry.toURL());
    }, (error) => {
      this.presentAlert('错误'+error.toString());
      loading.dismiss();
    });
    
  }
  downloadgao(idx){
   //进度条
   let loading = this.loadingCtrl.create({
     content: '下载进度：0%',
    });
    loading.present();
    let now:number=0;
    this.fileTransfer.onProgress(ProgressEvent=>{
      if(ProgressEvent.lengthComputable){
        now=ProgressEvent.loaded/ProgressEvent.total*100;
      }
    });
    let timer=setInterval(()=>{
      loading.setContent("下载进度："+Math.floor(now)+"%");
      if(now>=99){
        clearInterval(timer);
      }
    },300);
    //文件下载
   this.fileTransfer.download(this.arr2[idx]["file_src"],this.file.dataDirectory+this.arr2[idx]["file_name"],true).then((entry) => {
     if(timer){clearInterval(timer);}
     loading.dismiss();
     this.presentAlert('下载成功');
     console.log(entry.toURL());
   }, (error) => {
     this.presentAlert('错误'+error.toString());
     loading.dismiss();
   });
  }
}
