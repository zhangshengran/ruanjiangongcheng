import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Platform } from 'ionic-angular'; 
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { MessagePage } from '../pages/message/message';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
//import { Camera } from '@ionic-native/camera';
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
import { IonicStorageModule } from '@ionic/storage'
import { StartPage } from '../pages/start/start';
import { StatusBar } from '@ionic-native/status-bar';  //状态栏设置
import { MyimgPage } from '../pages/myimg/myimg';
import { TeadataPage } from '../pages/teadata/teadata';
import { StudataPage } from '../pages/studata/studata';
import { ImagePicker } from '@ionic-native/image-picker';//图像选择器
import { FileTransfer, FileUploadOptions, FileTransferObject }from'@ionic-native/file-transfer';//允许上载和下载文件
import { File } from '@ionic-native/file'; //允许对驻留在设备上的文件进行读/写访问
import { Toast } from '@ionic-native/toast';
import { MylearningPage } from '../pages/mylearning/mylearning';
import { Base64 } from '@ionic-native/base64'; 
import { SearchPage } from '../pages/search/search';
import { FilePath } from '@ionic-native/file-path';   //找文件路径
import { NewsnextPage } from '../pages/newsnext/newsnext';
import { LearingcirPage } from '../pages/learingcir/learingcir';
import { NewsPage } from '../pages/news/news';
import { DataPage } from '../pages/data/data';
import { VideoPage } from '../pages/video/video';
import { MydownloadPage } from '../pages/mydownload/mydownload';

@NgModule({
  declarations: [
    MyApp,
    MessagePage,
    HomePage,
    TabsPage,
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
    JobsPage,
    StartPage,
    MyimgPage,
    TeadataPage,
    StudataPage,
    MylearningPage,
    SearchPage,
    NewsnextPage,
    LearingcirPage,
    NewsPage,
    DataPage,
    VideoPage,
    MydownloadPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {//隐藏二级页
      backButtonText: '',
      backButtonIcon:'ios-arrow-back-outline',
      tabsHideOnSubPages:true
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagePage,
    HomePage,
    TabsPage,
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
    JobsPage,
    StartPage,
    MyimgPage,
    TeadataPage,
    StudataPage,
    MylearningPage,
    SearchPage,
    NewsnextPage,
    LearingcirPage,
    NewsPage,
    DataPage,
    VideoPage,
    MydownloadPage
  ],
  providers: [
    StatusBar,
    //Camera,
    SplashScreen,
    ImagePicker,
    File,
    Base64,
   FileTransferObject,
   FilePath,
   Toast,
   FileTransfer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
