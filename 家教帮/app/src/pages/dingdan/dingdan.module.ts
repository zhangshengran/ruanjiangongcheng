import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DingdanPage } from './dingdan';

@NgModule({
  declarations: [
    DingdanPage,
  ],
  imports: [
    IonicPageModule.forChild(DingdanPage),
  ],
})
export class DingdanPageModule {}
