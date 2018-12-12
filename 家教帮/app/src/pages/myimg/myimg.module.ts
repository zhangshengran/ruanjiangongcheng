import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyimgPage } from './myimg';

@NgModule({
  declarations: [
    MyimgPage,
  ],
  imports: [
    IonicPageModule.forChild(MyimgPage),
  ],
})
export class MyimgPageModule {}
