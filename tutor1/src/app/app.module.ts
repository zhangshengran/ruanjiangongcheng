import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { MessagePage } from '../pages/message/message';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
//import { Camera } from '@ionic-native/camera';
import { SettingPage } from '../pages/setting/setting';
import { LoginPage } from '../pages/login/login';
import { ForgetPage } from '../pages/forget/forget';
import { MyPage } from '../pages/my/my';
import { MydataPage } from '../pages/mydata/mydata';
import { MycoursePage } from '../pages/mycourse/mycourse';
import { MyprovePage } from '../pages/myprove/myprove';
import { MytalkPage } from '../pages/mytalk/mytalk';
import { MysettingPage } from '../pages/mysetting/mysetting';
import { MydataforstudentPage } from '../pages/mydataforstudent/mydataforstudent';
import { PjxiangqingPage } from '../pages/pjxiangqing/pjxiangqing';
import { DingdanPage } from '../pages/dingdan/dingdan';
import { TalkPage } from '../pages/talk/talk';
import { OpenlessonPage } from '../pages/openlesson/openlesson';
import { AffirmPage } from '../pages/affirm/affirm';
import { BeginclassPage } from '../pages/beginclass/beginclass';
import { JobPage } from '../pages/job/job';
import { KechengPage } from '../pages/kecheng/kecheng';
import { LearningPage } from '../pages/learning/learning';
import { LocationPage } from '../pages/location/location';
import { MyclassPage } from '../pages/myclass/myclass';
import { MyjobPage } from '../pages/myjob/myjob';
import { PublishPage } from '../pages/publish/publish';
import { TeacherPage } from '../pages/teacher/teacher';
import { TeachersPage } from '../pages/teachers/teachers';
import { HotCoursePage } from '../pages/hotcourse/hot-course';
import { JobsPage } from '../pages/jobs/jobs';







@NgModule({
  declarations: [
    MyApp,
    MessagePage,
    HomePage,
    TabsPage,
    SettingPage,
    LoginPage,
    ForgetPage,
    MyPage,
    MydataPage,
    MycoursePage,
    MyprovePage,
    MytalkPage,
    MysettingPage,
    MydataforstudentPage,
    PjxiangqingPage,
    DingdanPage,
    TalkPage,
    OpenlessonPage,
    AffirmPage,
    BeginclassPage,
    JobPage,
    KechengPage,
    LearningPage,
    LocationPage,
    MyclassPage,
    MyjobPage,
    PublishPage,
    TeacherPage,
    TeachersPage,
    HotCoursePage,
    JobsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {//隐藏二级页
      backButtonText: '',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagePage,
    HomePage,
    TabsPage,
    SettingPage,
    LoginPage,
    ForgetPage,
    MyPage,
    MydataPage,
    MycoursePage,
    MyprovePage,
    MytalkPage,
    MysettingPage,
    MydataforstudentPage,
    PjxiangqingPage,
    DingdanPage,
    TalkPage,
    OpenlessonPage,
    AffirmPage,
    BeginclassPage,
    JobPage,
    KechengPage,
    LearningPage,
    LocationPage,
    MyclassPage,
    MyjobPage,
    PublishPage,
    TeacherPage,
    TeachersPage,
    HotCoursePage,
    JobsPage
  ],
  providers: [
    StatusBar,
    //Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
