import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyclassPage } from './myclass';

@NgModule({
  declarations: [
    MyclassPage,
  ],
  imports: [
    IonicPageModule.forChild(MyclassPage),
  ],
})
export class MyclassPageModule {}
