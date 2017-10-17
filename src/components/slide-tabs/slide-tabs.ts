import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Slides, LoadingController, NavController } from "ionic-angular";

/**
 * Generated class for the SlideTabsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'slide-tabs',
  templateUrl: 'slide-tabs.html'
})
export class SlideTabsComponent {
  @Input() items: Array<any>;
  @Output() selectItem: EventEmitter<any> = new EventEmitter();
  @Output() selectShop: EventEmitter<any> = new EventEmitter();
  @Output() onProductList: EventEmitter<any> = new EventEmitter();
  @Output() onShopList: EventEmitter<any> = new EventEmitter();

  @ViewChild('tabsSlider') tabsSlider: Slides;
  tabs: any;
  selectPage: boolean = false;
  stopInterval: boolean = false;



  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController) {
    console.log('Hello SlideTabsComponent Component');
    let loading = this.loadingCtrl.create();
    loading.present();
    setTimeout(() => {
      this.tabs = '0';
      loading.dismiss();
    }, 1000);
  }
  selectTab(index) { // selected page on ion-segment 
    this.tabsSlider.slideTo(index);
    this.selectPage = true;
  }
  changeWillSlide($event) {
    this.tabs = $event._snapIndex.toString();
    this.stopInterval = false;
    this.scrollbars();
  }
  scrollbars() { //animation slide delay && auto fucus ion-segment 
    let element = document.getElementById("scrollable");
    let scrollLeft = this.tabs * 100;
    let scrollInterval = setInterval(() => {
      if (!this.stopInterval) {
        if (element.scrollLeft < scrollLeft && !this.selectPage) {
          element.scrollLeft += 1;
          scrollLeft = this.tabs * 100;
        } else {
          element.scrollLeft -= 1;
          scrollLeft = this.tabs * 100;
        }
        let checked = scrollLeft - element.scrollLeft;
        if (checked > 0) {
          if (checked <= 100 || this.selectPage) {
            this.selectPage = false;
            // console.log('clear');
            clearInterval(scrollInterval);
          }
        } else if (this.tabs === "0" && checked === 0) {
          // console.log('clear');
          clearInterval(scrollInterval);
        } else {
          checked++;
        }
      } else {
        clearInterval(scrollInterval);
      }
    }, 1);
  }

  touchToolbar() {
    this.stopInterval = true;
  }
  // function end page slide

  clickItem(e) {
    this.selectItem.emit(e);
  }

  clickShop(e) {
    this.selectShop.emit(e);
  }

  productList(e) {
    this.onProductList.emit(e);
  }

  shopList(e) {
    this.onShopList.emit(e);
  }

  touchstart(e) {
    this.tabsSlider.lockSwipes(true);
  }

  touchend(e) {
    this.tabsSlider.lockSwipes(false);
  }
}
