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
var MapComponent = (function () {
    function MapComponent(platform) {
        var _this = this;
        this.mapReady = false;
        platform.ready().then(function () {
            var div = document.getElementById("map_canvas");
            // Initialize the map view
            _this.map = plugin.google.maps.Map.getMap(div);
            // Wait until the map is ready status.
            _this.map.addEventListener(plugin.google.maps.event.MAP_READY, _this.onMapReady.bind(_this));
        }, function (error) {
            alert(error.message);
        });
    }
    MapComponent.prototype.onMapReady = function () {
        this.mapReady = true;
    };
    MapComponent.prototype.onBtnClicked = function () {
        if (this.mapReady)
            this.map.showDialog();
        else
            alert("Map is loading...");
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'google-map',
            template: '<div style="width:100%;height:400px" id="map_canvas"></div>'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
