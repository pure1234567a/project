import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RatesPage } from './rates';

@NgModule({
  declarations: [
    RatesPage,
  ],
  imports: [
    IonicPageModule.forChild(RatesPage),
  ],
  exports: [
    RatesPage
  ]
})
export class RatesPageModule {}
