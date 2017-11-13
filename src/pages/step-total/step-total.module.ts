import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepTotalPage } from './step-total';

@NgModule({
  declarations: [
    StepTotalPage,
  ],
  imports: [
    IonicPageModule.forChild(StepTotalPage),
  ],
  exports: [
    StepTotalPage
  ]
})
export class StepTotalPageModule {}
