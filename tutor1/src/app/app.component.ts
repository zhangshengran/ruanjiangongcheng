import { Component } from '@angular/core';
import { Platform,ToastController, App, NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs } from 'ionic-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage1:any = Tabs;
  rootPage:any = TabsPage;

  backButtonPressed = false;
  showExit(): void {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
        //第一次按，弹出Toast
        this.toastCtrl.create({
            message: '再按一次退出应用',
            duration: 2000,
            position: 'top'
        }).present();
      //标记为true
      this.backButtonPressed = true;
      //两秒后标记为false，如果退出的话，就不会执行了
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }
  constructor(public appCtrl: App,
    public toastCtrl: ToastController,private platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#f00');
      splashScreen.hide();
      
      this.platform.registerBackButtonAction(() => {
        //获取NavController
        let activeNav: NavController = this.appCtrl.getActiveNavs()[0];
        //如果可以返回上一页，则执行pop
        if (activeNav.canGoBack()) {
          activeNav.pop();
        } else {
            this.showExit();
        }
      });
  
    });
  }
}
