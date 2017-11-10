import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the AddressDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AddressDetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AddressDetailServiceProvider Provider');
  }
  deleteAddress(id): Promise<any> {
    return this.http.delete('https://tran-server.herokuapp.com/api/addresses/' + id)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
