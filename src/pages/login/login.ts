import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenServiceProvider } from "./authen.service";
import { TabnavPage } from '../tabnav/tabnav';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {
    username: '',
    password: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public authen: AuthenServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(credentials) {
    this.authen.signIn(credentials).then((data) => {
      // console.log(data);
      this.navCtrl.push(TabnavPage);
      
    }, (err) => {
      console.log(err);
    });
  }
}
