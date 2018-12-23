import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { FileTransfer, FileTransferObject}from'@ionic-native/file-transfer';//允许上载和下载文件
import { LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file'; //允许对驻留在设备上的文件进行读/写访问
@IonicPage()
@Component({
  selector: 'page-datayou',
  templateUrl: 'datayou.html',
})
export class DatayouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,private transfer: FileTransfer,private fileTransfer:FileTransferObject,public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,private file: File) {
    this.fileTransfer= this.transfer.create();
  }
  arr;
  load_src;
  load_name;
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle:data,
      buttons: ['Ok'],
    });
    alert.present();
  }


  getmore(){
    this.http.get("http://www.zhuoran.fun:3000"+"/learnFile?fileVerify=1").subscribe(res=>{
      console.log(res);
      this.arr=res;
  
      },err=>{
        console.log('error',err)
      })
  }
  downloadgao(idx) {
    //进度条
    console.log(typeof(this.arr[idx]["file_name"]));
    console.log(typeof(this.arr[idx]["file_src"]));
    this.load_src=this.arr[idx]["file_src"];
    this.load_name=this.arr[idx]["file_name"];
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

  ionViewDidLoad() {
    this.getmore();
  }


}
