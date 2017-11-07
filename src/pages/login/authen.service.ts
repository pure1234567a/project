import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { App } from 'ionic-angular';
import { LoginPage } from './login';

/*
  Generated class for the AuthenServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthenServiceProvider Provider');
  }
  signIn(data): Promise<any> {
    return this.http.post('https://tran-server.herokuapp.com/api/auth/signin/',data)
      .toPromise()
      .then(response => {
        let data = response.json();
        window.localStorage.setItem('user', JSON.stringify(data));
        return data;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
