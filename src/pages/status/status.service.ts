import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { OrderModel } from "./status.model";

/*
  Generated class for the StatusServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StatusServiceProvider {

  constructor(public http: Http) {
    console.log('Hello StatusServiceProvider Provider');
  }
  getOrder(): Promise<any> {
    return this.http.get('./assets/json/order.json')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
