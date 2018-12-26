import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file'; //允许对驻留在设备上的文件进行读/写访问
import { AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File,public alertCtrl: AlertController) {
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
 ionViewWillEnter() {
    this.file.listDir(this.file.dataDirectory,"").then((res)=>{//查找本地此文件夹下的所有文件
      this.file0=JSON.parse(JSON.stringify(res));//返回文件名、绝对路径等  JSON.stringify先转化成字符串再JSON.parse解析成对象
      for(let j in this.file0){
        if(this.file0[j]["isFile"]==true){ //判断为文件
        this.file0name=this.file0[j]["name"];
        this.arr.push(this.file0name);

        }
      }
    }
    ,(err)=>{ this.presentAlert(err);})
  }

}
