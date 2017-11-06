import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressPickupPage } from "../address-pickup/address-pickup";
import { OrderModel } from "./order.model";
import { OrderServiceProvider } from "./order.service";

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
  order: OrderModel = new OrderModel
  address = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public orderServiceProvider: OrderServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.getOrderData();
  }
  getOrderData() {
    this.orderServiceProvider.getOrder().then((data) => {
      this.order = data;
      console.log(data);
    }, (error) => {
      console.error(error);
    });
  }

  gotoAddresspickup() {
    this.navCtrl.push(AddressPickupPage);
  }

}
