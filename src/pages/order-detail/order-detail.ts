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
  status: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public statusServiceProvider: StatusServiceProvider) {
    this.data = this.navParams.data;
    this.status = this.data.status;
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }
  getStatus(data) {
    if (data.status === 'waiting') {
      data.status = "accept";
      this.updateStatus(data);
    }else if(data.status === 'accept'){
      data.status = "sorting";
      this.updateStatus(data);
    }else if(data.status === 'sorting'){
      data.status = "receive";
      this.updateStatus(data);
    }
  }
  updateStatus(data) {
    this.statusServiceProvider.updateOrder(data._id, data).then((res) => {
      this.navCtrl.pop();
      console.log(res);
    }, (err) => {
      alert(JSON.stringify(err));
    });
  }
}
