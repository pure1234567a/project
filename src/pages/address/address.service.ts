import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AddressModel } from "./address.model";

/*
  Generated class for the AddressServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddressServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AddressServiceProvider Provider');
  }
  getAddress(): Promise<any> {
    return this.http.get('https://tran-server.herokuapp.com/api/addresses')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
