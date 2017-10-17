import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatesModel } from "./rates.model";
import { RatesServiceProvider } from "./rates.service";
/**
 * Generated class for the RatesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})
export class RatesPage {
  cost:string;
  rates: RatesModel = new RatesModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public ratesServiceProvider: RatesServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatesPage');
    this.getRatesData();
    this.cost ='lamunphan';
  }
  getRatesData() {
    this.ratesServiceProvider.getRates().then((data) => {
      this.rates = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
}
