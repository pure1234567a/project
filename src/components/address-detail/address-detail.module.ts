import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AddressDetailComponent } from './address-detail';

@NgModule({
  declarations: [
    AddressDetailComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    AddressDetailComponent
  ]
})
export class AddressDetailComponentModule {}
