import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRatesPage } from './create-rates';

@NgModule({
  declarations: [
    CreateRatesPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRatesPage),
  ],
  exports: [
    CreateRatesPage
  ]
})
export class CreateRatesPageModule {}
