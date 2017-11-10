import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RateDetailPage } from './rate-detail';

@NgModule({
  declarations: [
    RateDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RateDetailPage),
  ],
  exports: [
    RateDetailPage
  ]
})
export class RateDetailPageModule {}
