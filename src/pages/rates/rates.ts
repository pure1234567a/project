import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatesModel } from "./rates.model";
import { RatesServiceProvider } from "./rates.service";
import { CreateRatesPage } from "../create-rates/create-rates";
import { RateDetailPage } from '../rate-detail/rate-detail';
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
  listLamunphan :any = [];
  listThaipost :any = [];
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
      // this.rates = data;
      data.forEach(type => {
        if (type.rates === 'lamunphan') {
          this.listLamunphan.push(type)
        } else {
          this.listThaipost.push(type)
        }
      });
      this.rates = {
        lamunphan: this.listLamunphan,
        thaipost: this.listThaipost
      }
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }
  gotoCreaterates(){
    this.navCtrl.push(CreateRatesPage);
  }
  selectRate(item){
    this.navCtrl.push(RateDetailPage,item);
  }
}
