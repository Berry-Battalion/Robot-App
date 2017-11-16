import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Bluetooth } from '../../Bluetooth/bluetooth';

@Component({
  selector: 'page-setting',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, private bluetooth: Bluetooth) {


    this.bluetooth.writeSerial()
      .then(
        () => console.log('success'), 
        () => console.log('failure')
      );
  }

}
