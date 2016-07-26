"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var plugin;
var HomePage = (function () {
    function HomePage(navCtrl, platform) {
        // platform.ready().then(() => {
        //   let div = document.getElementById("map_canvas");
        this.navCtrl = navCtrl;
        this.mapReady = false;
        //   // Initialize the map view
        //   this.map = plugin.google.maps.Map.getMap(div);
        //   // Wait until the map is ready status.
        //   this.map.addEventListener(plugin.google.maps.event.MAP_READY, this.onMapReady.bind(this));
        // }, (error) => {
        //   alert(error.message)
        // });
    }
    // onMapReady() {
    //   this.mapReady = true
    // }
    HomePage.prototype.onBtnClicked = function () {
        if (this.mapReady)
            this.map.showDialog();
        else
            alert("Map is loading...");
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html',
            directives: [MapComponent]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.Platform])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
