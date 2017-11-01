import { Component } from '@angular/core';
import { IonicPage, NavController, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BookingPage } from '../booking/booking';
import { RatesPage } from '../rates/rates';
import { StatusPage } from '../status/status';
import { MorePage } from '../more/more';
import { AuthenServiceProvider } from '../login/authen.service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the TabnavPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabnav',
  templateUrl: 'tabnav.html'
})
@IonicPage()
export class TabnavPage {

  homeRoot = HomePage
  bookingRoot = BookingPage
  ratesRoot = RatesPage
  statusRoot = StatusPage
  moreRoot = MorePage


  constructor(public navCtrl: NavController, public authorizeProvider: AuthenServiceProvider, public app: App) {
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (!user) {
      setTimeout(() => {
        // this.app.getActiveNav().push(LoginPage);
        this.navCtrl.setRoot(LoginPage);
        return;
      }, 300);
    }
  }

}
