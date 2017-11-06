import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderModel } from "./status.model";
import { StatusServiceProvider } from "./status.service";

/**
 * Generated class for the StatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  order: OrderModel = new OrderModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public statusServiceProvider:StatusServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
    this.getOrderData();
  }
  getOrderData() {
    this.statusServiceProvider.getOrder().then((data) => {
      this.order = data; 
      console.log(data);
    },(error) => {
      console.error(error);
    });
  }

}
