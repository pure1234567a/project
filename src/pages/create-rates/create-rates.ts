import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rates } from "./create-rates.model";
import { CreateRatesProvider } from "./create-rates.service";
/**
 * Generated class for the CreateRatesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-create-rates',
  templateUrl: 'create-rates.html',
})
export class CreateRatesPage {
  rate: Rates = new Rates();
  constructor(public navCtrl: NavController, public navParams: NavParams, public CreateRatesProvider: CreateRatesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateRatesPage');
  }
  addRate() {
    this.CreateRatesProvider.saveRate(this.rate).then((data) => {
      this.navCtrl.pop();
      console.log(JSON.stringify(data));
    }, (err) => {
      console.log(JSON.stringify(err));
    });
  }
}
