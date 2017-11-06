import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressPickupPage } from '../address-pickup/address-pickup';
import { AddressModel } from "./address.model";
import { AddressServiceProvider } from "./address.service";

/**
 * Generated class for the AddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  sort: string;
  listSender :any = [];
  listReceiver :any = [];
  address: AddressModel = new AddressModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public addressServiceProvider: AddressServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
    this.getAddressData();
    this.sort = 'sender';
  }
  getAddressData() {
    this.addressServiceProvider.getAddress().then((data) => {
      // this.address = data;
      data.forEach(address => {
        if (address.sort === 'sender') {
          this.listReceiver.push(address)
        } else {
          this.listSender.push(address)
        }
      });
      this.address = {
        receiver: this.listReceiver,
        sender: this.listSender
      }
      console.log(this.address);
    }, (err) => {
      console.error(err);
    });

  }



  gotoPickup() {
    this.navCtrl.push(AddressPickupPage);
  }

}
