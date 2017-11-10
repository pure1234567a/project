import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the AddressDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'address-detail',
  templateUrl: 'address-detail.html'
})
export class AddressDetailComponent {
  @Input() items: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }
  gotoDetail(item) {
    this.itemClicked.emit(item);
  }
}
