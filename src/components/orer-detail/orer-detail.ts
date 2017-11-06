import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the OrerDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'orer-detail',
  templateUrl: 'orer-detail.html'
})
export class OrerDetailComponent {
  @Input() items: any;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

}
