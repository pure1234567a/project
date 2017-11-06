import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { RatesModel } from "./rates.model";

/*
  Generated class for the RatesServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RatesServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RatesServiceProvider Provider');
  }
  getRates(): Promise<any> {
    return this.http.get('http://localhost:3000/api/rates')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
