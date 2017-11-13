import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StepTotalPage } from '../step-total/step-total';

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
  order : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = this.navParams.data;
    console.log(this.order);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StepRatePage');
  }
  gotoNextStep(){
    this.navCtrl.push(StepTotalPage);
  }
}
