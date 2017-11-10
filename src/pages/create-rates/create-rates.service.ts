import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Rates } from "./create-rates.model";
/*
  Generated class for the CreateRatesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CreateRatesProvider {

  constructor(public http: Http) {
    console.log('Hello CreateRatesProvider Provider');
  }
  saveRate(data): Promise<Rates> {
    return this.http.post('https://tran-server.herokuapp.com/api/rates', data)
      .toPromise()
      .then(response => response.json() as Rates)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
