import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressDetailPage } from './address-detail';

@NgModule({
  declarations: [
    AddressDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressDetailPage),
  ],
  exports: [
    AddressDetailPage
  ]
})
export class AddressDetailPageModule {}
