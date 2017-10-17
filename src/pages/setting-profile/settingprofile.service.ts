import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { settingProfileModel } from "./setting-profile.model";

/*
  Generated class for the SettingprofileServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SettingprofileServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SettingprofileServiceProvider Provider');
  }
  getSettingProfile(): Promise<settingProfileModel> {
    return this.http.get('./assets/json/profile.json')
      .toPromise()
      .then(response => response.json() as settingProfileModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
