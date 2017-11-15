import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusServiceProvider } from "../../pages/status/status.service";

/**
 * Generated class for the StepTotalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-step-total',
  templateUrl: 'step-total.html',
})
export class StepTotalPage {
  order: any;
  amount = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public statusServiceProvider: StatusServiceProvider) {
    this.order = this.navParams.data;
    console.log(this.order);
  }

  ionViewDidLoad() {
    this.order.items.forEach(itm => {
      this.amount += itm.total;
      console.log(this.amount);
    });
    console.log('ionViewDidLoad StepTotalPage');
  }
  saveOrder() {
    let order = {
      sender: this.order.sender,
      receiver: this.order.receiver,
      items: this.order.items,
      amount: this.amount
    }
    this.statusServiceProvider.saveOrder(order).then((data) => {
      console.log(data);
      this.navCtrl.popToRoot();
    }, (err) => {
      console.error(err);
    });

  }
}
