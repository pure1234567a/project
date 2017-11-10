import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Rates } from "../../pages/create-rates/create-rates.model";

/*
  Generated class for the RateDetailServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RateDetailServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RateDetailServiceProvider Provider');
  }
  deleteRate(id): Promise<any> {
    return this.http.delete('https://tran-server.herokuapp.com/api/rates/' + id)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
