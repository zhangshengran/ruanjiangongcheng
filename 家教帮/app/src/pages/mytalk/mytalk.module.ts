import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytalkPage } from './mytalk';

@NgModule({
  declarations: [
    MytalkPage,
  ],
  imports: [
    IonicPageModule.forChild(MytalkPage),
  ],
})
export class MytalkPageModule {}
