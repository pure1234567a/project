import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { AddressDetailServiceProvider } from "./address-detail.service";

/**
 * Generated class for the AddressDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-address-detail',
  templateUrl: 'address-detail.html',
})
export class AddressDetailPage {
  address: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public modalCtrl: ModalController,public addressDetailServiceProvider:AddressDetailServiceProvider) {
    this.address = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressDetailPage');
  }
  alertDeleteAddress(item) {
    this.presentConfirm(item);
  }
  deleteAddress(item) {
    // this.loadingCtrl.onLoading();
    this.addressDetailServiceProvider.deleteAddress(item._id).then((data) => {
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
      message: 'Do you want to delete this Address?',
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
            this.deleteAddress(item);
          }
        }
      ]
    });
    alert.present();
  }
}
