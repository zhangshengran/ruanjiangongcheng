
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { ImagePicker} from '@ionic-native/image-picker';//图像选择器
import { FileTransfer,  FileTransferObject }from'@ionic-native/file-transfer';//允许上载和下载文件
import { File } from '@ionic-native/file'; //允许对驻留在设备上的文件进行读/写访问
import { Toast } from '@ionic-native/toast';//此插件允许您在iOS，Android和WP8上显示本机Toast（一个小文本弹出窗口）
import { HttpClient, HttpParams } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
import { Base64 } from '@ionic-native/base64';
import'rxjs/add/operator/map';
import { FileOpener } from '@ionic-native/file-opener';
@IonicPage()
@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html',
})
export class PublishPage {
  avatar : string="";
  temp;
  content;
  poster_id=window.localStorage.getItem('tokenID');
  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File,private transfer: FileTransfer,private imagePicker: ImagePicker,private fileTransfer:FileTransferObject,
    public actionSheetCtrl:ActionSheetController,private toast: Toast,private http:HttpClient,public alertCtrl: AlertController,private base64: Base64,private fileOpener: FileOpener) {
    this.fileTransfer= this.transfer.create();

  }

  // 调用相册时传入的参数
private imagePickerOpt = {
  maximumImagesCount: 1,//选择一张图片
  width: 800,
  height: 800,
  quality: 80
  };


//------------提示框---------
presentAlert(data) {
  let alert = this.alertCtrl.create({
    title: '提示！',
    subTitle:data,
    buttons: ['Ok'],
  });
  alert.present();
}
showPicActionSheet() {
  this.uploadImg(this.temp);
}

show(){
     this.useASComponent();     
}
// 使用ionic中的ActionSheet组件
 useASComponent(){
let actionSheet=
this.actionSheetCtrl.create({
title: '请选择',
buttons: [

{
text: '从手机相册选择',
handler: ()=> {
this.imagePicker.requestReadPermission();
this.openImgPicker();
}
},
{
text: '取消',
role: 'cancel',
handler: ()=> {
}
}
]
});
actionSheet.present().then(value => {
      return value;
    });
}
data:string;
// 打开手机相册
jueduipath;
private openImgPicker() {
  var that=this;
  this.imagePicker.getPictures(this.imagePickerOpt)
  .then((results)=> {
  for (var i=0; i
  < results.length; i++) {
  this.temp = results[i];
  this.jueduipath=results[i];
  }
  this.openFile( this.jueduipath);
}, (err)=> {
  this.toast.showShortCenter('ERROR:'+ err);//错误：无法从手机相册中选择图片！
  });
  }
 
// 上传图片
private uploadImg(path:string) {
  var that=this;
  if (!path) {
  return;
  }
  let options: any;
    options = {
      fileKey:this.poster_id,//接收图片时的key  
      fileName:this.content,
       headers: {
       'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'//不加入 发生错误！！
    },  
    };
   
    this.fileTransfer.upload(path,'http://www.zhuoran.fun:3000/writeNote ',options) //将文件发送到服务器
      .then((data)=> {
          var arr=JSON.parse(data.response);
          this.navCtrl.pop();
       }, (err) => {
          that.presentAlert(err); 
    });
  }
  //图片预览
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






























