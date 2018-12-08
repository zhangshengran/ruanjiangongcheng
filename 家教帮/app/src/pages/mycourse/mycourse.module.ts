import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MycoursePage } from './mycourse';

@NgModule({
  declarations: [
    MycoursePage,
  ],
  imports: [
    IonicPageModule.forChild(MycoursePage),
  ],
})
export class MycoursePageModule {}
