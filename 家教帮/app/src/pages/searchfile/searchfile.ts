import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { File } from '@ionic-native/file'; 
import { FileTransfer, FileTransferObject}from'@ionic-native/file-transfer';//允许上载和下载文件
/**
 * Generated class for the SearchfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchfile',
  templateUrl: 'searchfile.html',
})
export class SearchfilePage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,private transfer: FileTransfer,private fileTransfer:FileTransferObject,public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,private file: File) {
    this.fileTransfer= this.transfer.create();
  }
  text;
  arr;
  presentAlert(data) {
    let alert = this.alertCtrl.create({
      title: '提示！',
      subTitle:data,
      buttons: ['Ok'],
    });
    alert.present();
  }
  search(){
    this.http.get('http://www.zhuoran.fun:3000/fileSearch'+'?name='+this.text).subscribe(res=>{ 
      console.log(res);
      console.log(this.text);
      this.arr=res;
    },err=>{
      console.log("ERROR:",err);
    })
  }
  load_src;
  load_name;
  download(idx) {
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

}
