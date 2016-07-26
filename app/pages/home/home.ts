import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { MapComponent } from '../../map/map.component';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [MapComponent]
})
export class HomePage {
  @ViewChild(MapComponent)
  private map: MapComponent;

  constructor(private navCtrl: NavController) {}

  fullScreen() {
    this.map.fullScreen();
  }
}
