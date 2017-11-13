import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookingPage } from '../../pages/booking/booking';
import { AddressPickupModel } from "../../pages/address-pickup/address-pickup.model";

/**
 * Generated class for the AddPickupComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'add-pickup',
  templateUrl: 'add-pickup.html'
})
export class AddPickupComponent {
  navCtrl: any;
  @Input() items: AddressPickupModel = new AddressPickupModel();
  @Output() updateClicked: EventEmitter<any> = new EventEmitter<any>();
  address: AddressPickupModel = new AddressPickupModel();
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    // console.log(this.items);
    // this.getsort();
    console.log('Hello AddPickupComponent Component');
  }

  // getsort() {
  //   setTimeout(function() {
  //     this.address = window.localStorage.getItem('sort') ? JSON.parse(window.localStorage.getItem('sort')) : '';
  //     console.log(this.address);
  //     return this.address;
  //   }, 1000);

  // }
  updateAddress() {
    this.updateClicked.emit(this.address);
  }

  gotoBooking() {
    this.itemClicked.emit(this.address);
  }

}
