import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressPickupPage } from "../address-pickup/address-pickup";
import { Order } from "./order.model";
import { OrderServiceProvider } from "./order.service";
import { AddressServiceProvider } from '../address/address.service';
import { AddressModel } from '../address/address.model';
import { Address } from '../status/status.model';
import { StepRatePage } from '../step-rate/step-rate';

/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  order: Order = new Order();
  address = false;
  listSender: any = [];
  listReceiver: any = [];
  listaddress: AddressModel = new AddressModel();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderServiceProvider: OrderServiceProvider,
    public addressServiceProvider: AddressServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.getAddress();
  }
  // getOrderData() {
  //   this.orderServiceProvider.getOrder().then((data) => {
  //     this.order = data;
  //     console.log(data);
  //   }, (error) => {
  //     console.error(error);
  //   });
  // }
  getAddress() {
    this.addressServiceProvider.getAddress().then((data) => {
      data.forEach(address => {
        if (address.sort === 'sender') {
          this.listSender.push(address)
        } else {
          this.listReceiver.push(address)
        }
      });
      this.listaddress = {
        receiver: this.listReceiver,
        sender: this.listSender
      }
      console.log(this.listaddress);
    }, (err) => {
      console.log(err);
    });
  }

  gotoAddresspickup() {
    this.navCtrl.push(AddressPickupPage);
  }

  selectedSender(data) {
    console.log(data);
    this.order.sender = data;
  }
  selectedReceiver(data) {
    console.log(data);
    this.order.receiver = data;
  }
  gotoNextStep() {
    this.navCtrl.push(StepRatePage,this.order);
  }
}
