import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var plugin: any;

@Component({
  selector: 'google-map',
  template: '<div style="width:100%;height:400px" id="map_canvas"></div>'
})
export class MapComponent {

  private map: any;
  public ready = false;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      let div = document.getElementById("map_canvas");

      // Initialize the map view
      this.map = plugin.google.maps.Map.getMap(div);

      // Wait until the map is ready status.
      this.map.addEventListener(plugin.google.maps.event.MAP_READY, this.onMapReady.bind(this));
    }, (error) => {
      alert(error.message)
    });
  }

  private onMapReady() {
    this.ready = true
  }

  fullScreen() {
    if (this.ready)
      this.map.showDialog();
    else
      alert("Map is loading...")
  }
}
