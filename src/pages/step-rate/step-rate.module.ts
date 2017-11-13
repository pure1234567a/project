import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepRatePage } from './step-rate';

@NgModule({
  declarations: [
    StepRatePage,
  ],
  imports: [
    IonicPageModule.forChild(StepRatePage),
  ],
  exports: [
    StepRatePage
  ]
})
export class StepRatePageModule {}
