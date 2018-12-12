import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { TeadataPage } from '../teadata/teadata';
import { StudataPage } from '../studata/studata';
import { ImagePicker } from '@ionic-native/image-picker';//图像选择器
import { FileTransfer, FileUploadOptions, FileTransferObject }from'@ionic-native/file-transfer';//允许上载和下载文件
import { File } from '@ionic-native/file'; //允许对驻留在设备上的文件进行读/写访问
import { Toast } from '@ionic-native/toast';//此插件允许您在iOS，Android和WP8上显示本机Toast（一个小文本弹出窗口）
import { HttpClient, HttpParams } from '@angular/common/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the MyimgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myimg',
  templateUrl: 'myimg.html',
})
export class MyimgPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File,private transfer: FileTransfer,private imagePicker: ImagePicker,private fileTransfer:FileTransferObject,
    public actionSheetCtrl:ActionSheetController,private toast: Toast,private http:HttpClient,public alertCtrl: AlertController) {
    this.fileTransfer= this.transfer.create();
    this.head=window.localStorage.getItem('head'); //头像的路径

  }
  teacherID;
  head;
  arr;
  stu_id;
  tea_id;
  pea_name;
  pea_age;
  pea_sex;
  bianji(){
    if(this.teacherID=='null'){  //后台返回的参数类型是字符串
      this.http.get('http://www.zhuoran.fun:3000'+'/showdata_stu?stu_id='+this.stu_id).subscribe(res => {
             console.log("res:",res);
             this.arr=res[0];
             this.navCtrl.push(StudataPage,{
              stu_content:this.arr
            }) 
        },
       error=>{
        console.log("error:",error);
       });
       
    }else{
      this.tea_id=window.localStorage.getItem('teacherID');
      this.http.get('http://www.zhuoran.fun:3000'+'/showdata_tea?tea_id='+this.tea_id).subscribe(res => {
             console.log("res:",res);
             this.arr=res[0];
             this.navCtrl.push(TeadataPage,{
              tea_content:this.arr
            }) 
        },
       error=>{
        console.log("error:",error)
       });
    }
  }

  ionViewWillEnter() {  //一进来时，就会调用,变量就会及时更新
       this.pea_name=window.localStorage.getItem('pea_name');
       this.pea_age=window.localStorage.getItem('pea_age');
       this.pea_sex=window.localStorage.getItem('pea_sex');
       this.stu_id=window.localStorage.getItem('tokenID');
       this.teacherID=window.localStorage.getItem('teacherID');
  }






















// 调用相册时传入的参数
private imagePickerOpt = {
  maximumImagesCount: 1,//选择一张图片
  width: 800,
  height: 800,
  quality: 80
  };
// 图片上传的的api
public uploadApi:string;

upload: any= {
fileKey: 'upload',//接收图片时的key
fileName: 'imageName.jpg',
headers: {
'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'//不加入 发生错误！！
},
params: {}, //需要额外上传的参数
success: (data)=> { },//图片上传成功后的回调
error: (err)=> { },//图片上传失败后的回调
listen: ()=> { }//监听上传过程
};
//--------包装成为json数据--------
private encodeHttpParams(params: any): any {
  if (!params) return null;
  return new HttpParams({fromObject: params});
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
showPicActionSheet() {
  this.useASComponent();
  var params = {
     stu_id:this.stu_id
  }
  this.http.post('http://www.zhuoran.fun:3000/upload_head',this.encodeHttpParams(params)).subscribe(res => {
    this.presentAlert(res["message"]); 
},error =>{
  this.presentAlert('服务器连接错误，请重试');
})
}

// 使用ionic中的ActionSheet组件
 useASComponent() {
let actionSheet=
this.actionSheetCtrl.create({
title: '请选择',
buttons: [

{
text: '从手机相册选择',
handler: ()=> {
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
actionSheet.present();
}
// 打开手机相册
private openImgPicker() {
  let temp 
  = '';
  this.imagePicker.getPictures(this.imagePickerOpt)
  .then((results)=> {
  for (var i=0; i
  < results.length; i++) {
  temp = results[i];
  }
  this.uploadImg(temp);
  }, (err)=> {
  this.toast.showShortCenter('ERROR:'+ err);//错误：无法从手机相册中选择图片！
  });
  }
// 上传图片
private uploadImg(path:string) {
  if (!path) {
  return;
  }
  let options:any;
  options = {
  httpMethod:'POST',
  fileName:'file'
  };
  this.fileTransfer.upload(path,'http://www.zhuoran.fun:3000/upload_head', options) //将文件发送到服务器
  .then((data)=> {
  if (this.upload.success) {
  this.upload.success(JSON.parse(data.response));
  this.presentAlert('上传成功 '); 
  }
  }, (err) => {
  if (this.upload.error) {
  this.upload.error(err);
  this.presentAlert(err); 
  } else {
  this.toast.showShortCenter('错误：上传失败！');
  }
  });
  
  }
  /*
  private initImgSer() {
    this.imgSer.uploadApi 
    = '.....';
    this.imgSer.upload.success= (data)=> {
    };
    this.imgSer.upload.error= (err)=> {
    this.toast.showShortCenter('上传失败');
    };
    }
    avatarChoice() {
    this.initImgSer();
    this.imgSer.showPicActionSheet();
    }
    */
}

