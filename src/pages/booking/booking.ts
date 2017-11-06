import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingModel } from "./booking.model";
import { BookingServiceProvider } from './booking.service';
import { AddressPickupPage } from '../address-pickup/address-pickup';

/**
 * Generated class for the BookingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  listSender: any = [];
  booking: BookingModel = new BookingModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public bookingServiceProvider: BookingServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
    this.getBookingData();
  }
  getBookingData() {
    this.bookingServiceProvider.getBooking().then((data) => {
      // this.booking = data;
      data.forEach(address => {
        if (address.sort === 'sender') {
          this.listSender.push(address)
        }
      });
      this.booking.items = this.listSender;
    }, (err) => {
      console.error(err);
    });

  }
  gotoPickup() {
    this.navCtrl.push(AddressPickupPage);
  }

}
