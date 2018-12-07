import { Component } from '@angular/core';
import { MessagePage } from '../message/message';
import { HomePage } from '../home/home';
import { ModalController } from 'ionic-angular';
import { MyPage } from '../my/my';

import { OpenlessonPage } from '../openlesson/openlesson';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OpenlessonPage;
  tab3Root = MessagePage;
  tab4Root = MyPage;
  // tab5Root = 'CPage';

  constructor(public modalCtrl:ModalController) {

  }
  //弹出界面
  // ionViewDidLoad(){
  //   document.querySelector('#tab-t0-2').addEventListener('click',()=>{
  //   let profileModal = this.modalCtrl.create(CPage)
  //   profileModal.present();
  //   },false)



      // document.querySelector('#tab-t0-4').addEventListener('click',()=>{
      //   let profileModal = this.modalCtrl.create(BPage)
      //   profileModal.present();
      //   },false)
    
  }

