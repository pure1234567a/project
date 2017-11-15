import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StepTotalPage } from '../step-total/step-total';
import { RatesServiceProvider } from '../rates/rates.service';

/**
 * Generated class for the StepRatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-step-rate',
  templateUrl: 'step-rate.html',
})
export class StepRatePage {
  order: any;
  rates: any;
  price = 0;
  qty = 1;
  total = 0;
  items = [];
  selectRate: any;
  listLamunphan = [];
  listThaipost = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public ratesServiceProvider: RatesServiceProvider) {
    this.order = this.navParams.data;
    console.log(this.order);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepRatePage');
    this.getRatesData();
  }
  getRatesData() {
    this.ratesServiceProvider.getRates().then((data) => {
      this.rates = data;
      data.forEach(type => {
        if (type.rates === 'lamunphan') {
          this.listLamunphan.push(type)
        } else {
          this.listThaipost.push(type)
        }
      });
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
  selectedRate(rate) {
    console.log(rate);
  }
  selectedSize(size) {
    this.selectRate = size;
    console.log(size.price);
    this.price = size.price;
    if (this.price > 0) {
      this.total = this.qty * this.price;
      console.log(this.total);
    }
  }
  addQty(qty) {
    console.log(qty);
    this.total = this.qty * this.price;
  }
  addItem() {
    let data = {
      item: this.selectRate,
      qty: this.qty,
      total: this.total
    }
    this.items.push(data);
    console.log(this.items);
  }
  gotoNextStep() {
    let orderRate = {
      sender: this.order.sender,
      receiver: this.order.receiver,
      items: this.items
    }
    this.navCtrl.push(StepTotalPage, orderRate);
  }

}
