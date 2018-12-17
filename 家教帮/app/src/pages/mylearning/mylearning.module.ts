import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MylearningPage } from './mylearning';

@NgModule({
  declarations: [
    MylearningPage,
  ],
  imports: [
    IonicPageModule.forChild(MylearningPage),
  ],
})
export class MylearningPageModule {}
