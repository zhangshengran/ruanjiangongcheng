import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotCoursePage } from './hot-course';

@NgModule({
  declarations: [
    HotCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(HotCoursePage),
  ],
})
export class HotCoursePageModule {}
