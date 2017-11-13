import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { RateDetailServiceProvider } from "./rate-detail.service";
import { CreateRatesPage } from '../create-rates/create-rates';

/**
 * Generated class for the RateDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rate-detail',
  templateUrl: 'rate-detail.html',
})
export class RateDetailPage {
  rate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController, public rateDetailServiceProvider: RateDetailServiceProvider) {
    this.rate = this.navParams.data;
    console.log(this.rate);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RateDetailPage');
  }
  alertDeleteRate(item) {
    this.presentConfirm(item);
  }
  deleteRate(item) {
    // this.loadingCtrl.onLoading();
    this.rateDetailServiceProvider.deleteRate(item._id).then((data) => {
      this.navCtrl.pop();
      // this.loadingCtrl.dismiss();
    }, (err) => {
      alert(JSON.parse(err._body).message);
      // this.loadingCtrl.dismiss();
    });
  }
  presentConfirm(item) {
    const alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete this Rate?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('delete');
            this.deleteRate(item);
          }
        }
      ]
    });
    alert.present();
  }
  updateRate(item) {
    this.navCtrl.push(CreateRatesPage, item)
  }
}
