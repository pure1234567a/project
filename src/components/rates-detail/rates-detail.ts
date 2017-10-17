import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the RatesDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'rates-detail',
  templateUrl: 'rates-detail.html'
})
export class RatesDetailComponent {
  @Input() items: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

}
