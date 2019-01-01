import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, TabHighlight } from 'ionic-angular';
import { File } from '@ionic-native/file'; //允许对驻留在设备上的文件进行读/写访问
import { AlertController } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
/**
 * Generated class for the MydownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mydownload',
  templateUrl: 'mydownload.html',
})
export class MydownloadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File,public alertCtrl: AlertController,private fileOpener: FileOpener) {
  }
 file0;
 file0name;
 arr=[];
 //------------提示框---------
presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: '提示！',
    subTitle:data,
    buttons: ['Ok'],
  });
  alert.present();
}
full
 ionViewWillEnter() {
   var that=this;
    this.file.listDir(this.file.dataDirectory,"").then((res)=>{//查找本地此文件夹下的所有文件
      //that.presentAlert(JSON.stringify(res));
      that.file0=JSON.parse(JSON.stringify(res));//返回文件名、绝对路径等  JSON.stringify先转化成字符串再JSON.parse解析成对象
      //that.presentAlert(that.file0);
      for(let j in that.file0){
        if(that.file0[j]["isFile"]==true){ //判断为文件
        //  that.presentAlert(that.file0[j]);
          that.file0name=that.file0[j]["name"];
          that.arr.push(that.file0name);
         // that.arrjuedui.push(that.file0[j]["nativeURL"]);
          //for(let i in that.file0[j]){
          //  that.presentAlert(that.file0[j][i]);
         // }
          
        }
      }
    }
    ,(err)=>{ this.presentAlert(err);})
    

  }
  jueduipath;
  file1;
  open(i){
    this.jueduipath=this.file.dataDirectory+"/"+this.arr[i]; //绝对路径
    this.openFile( this.jueduipath);
  }
  openFile(path:string){
    this.fileOpener.open(path, this.getFileMimeType(path.substring(path.lastIndexOf(".")+1,path.length)))
  .then(//() => this.presentAlert('File is opened')
  )
  .catch(e => this.presentAlert('Error opening file'+JSON.stringify(e)));
  }
  getFileMimeType(fileType: string): string {
    let mimeType: string = '';
  
    switch (fileType) {
      case 'txt':
        mimeType = 'text/plain';
        break;
      case 'docx':
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
      case 'doc':
        mimeType = 'application/msword';
        break;
      case 'pptx':
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
      case 'ppt':
        mimeType = 'application/vnd.ms-powerpoint';
        break;
      case 'xlsx':
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        break;
      case 'xls':
        mimeType = 'application/vnd.ms-excel';
        break;
      case 'zip':
        mimeType = 'application/x-zip-compressed';
        break;
      case 'rar':
        mimeType = 'application/octet-stream';
        break;
      case 'pdf':
        mimeType = 'application/pdf';
        break;
      case 'jpg':
        mimeType = 'image/jpeg';
        break;
      case 'png':
        mimeType = 'image/png';
        break;
      default:
        mimeType = 'application/' + fileType;
        break;
    }
    return mimeType;
  }
}
