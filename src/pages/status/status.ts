import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderModel } from "./status.model";
import { StatusServiceProvider } from "./status.service";
import { OrderDetailPage } from '../order-detail/order-detail';

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
  listWaiting: any = [];
  listAccept: any = [];
  listSorting: any = [];
  listReceive: any = [];
  order: OrderModel = new OrderModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public statusServiceProvider: StatusServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
    this.getOrderData();
  }
  getOrderData() {
    this.statusServiceProvider.getOrder().then((data) => {
      data.forEach(status => {
        if (status.status === 'waiting') {
          this.listWaiting.push(status)
        } else if (status.status === 'accept') {
          this.listAccept.push(status)
        }else if (status.status === 'sorting') {
          this.listSorting.push(status)
        }else if (status.status === 'receive') {
          this.listReceive.push(status)
        }
      });
      this.order = {
        waiting: this.listWaiting,
        accept: this.listAccept,
        sorting:this.listSorting,
        receive:this.listReceive      }
      // this.order = data;
      // console.log(data);
    }, (error) => {
      console.error(error);
    });
  }
  selected(item) {
    this.navCtrl.push(OrderDetailPage, item);
  }
}
