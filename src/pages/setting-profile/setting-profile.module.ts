import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingProfilePage } from './setting-profile';

@NgModule({
  declarations: [
    SettingProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingProfilePage),
  ],
  exports: [
    SettingProfilePage
  ]
})
export class SettingProfilePageModule {}
