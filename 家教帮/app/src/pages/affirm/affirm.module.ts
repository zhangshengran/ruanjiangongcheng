import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AffirmPage } from './affirm';

@NgModule({
  declarations: [
    AffirmPage,
  ],
  imports: [
    IonicPageModule.forChild(AffirmPage),
  ],
})
export class AffirmPageModule {}
