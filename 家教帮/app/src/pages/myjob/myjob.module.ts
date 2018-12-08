import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyjobPage } from './myjob';

@NgModule({
  declarations: [
    MyjobPage,
  ],
  imports: [
    IonicPageModule.forChild(MyjobPage),
  ],
})
export class MyjobPageModule {}
