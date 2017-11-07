import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusServiceProvider } from "../status/status.service";

/**
 * Generated class for the OrderDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public statusServiceProvider: StatusServiceProvider) {
    this.data = this.navParams.data;
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }
  getStatus(data) {
    if (data.status === 'waiting') {
      data.status = "accept";
      this.updateStatus(data);
    }
  }
  updateStatus(data) {
    this.statusServiceProvider.updateOrder(data._id, data).then((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
