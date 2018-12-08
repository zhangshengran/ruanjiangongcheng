import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenlessonPage } from './openlesson';

@NgModule({
  declarations: [
    OpenlessonPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenlessonPage),
  ],
})
export class OpenlessonPageModule {}
