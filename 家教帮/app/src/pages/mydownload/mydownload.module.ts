import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MydownloadPage } from './mydownload';

@NgModule({
  declarations: [
    MydownloadPage,
  ],
  imports: [
    IonicPageModule.forChild(MydownloadPage),
  ],
})
export class MydownloadPageModule {}
