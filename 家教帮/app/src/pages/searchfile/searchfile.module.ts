import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchfilePage } from './searchfile';

@NgModule({
  declarations: [
    SearchfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchfilePage),
  ],
})
export class SearchfilePageModule {}
