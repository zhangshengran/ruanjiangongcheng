import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatamorePage } from './datamore';

@NgModule({
  declarations: [
    DatamorePage,
  ],
  imports: [
    IonicPageModule.forChild(DatamorePage),
  ],
})
export class DatamorePageModule {}
