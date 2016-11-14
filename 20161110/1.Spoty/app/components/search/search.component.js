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
var spotify_services_1 = require('../../services/spotify.services');
var SearchComponent = (function () {
    function SearchComponent(spotify) {
        this.spotify = spotify;
    }
    SearchComponent.prototype.searchMusic = function () {
        var _this = this;
        console.log(this.searchString);
        this.spotify.getSearchArtist(this.searchString).subscribe(function (value) {
            _this.listArtist = value.artists.items;
            console.log(value);
        }, function (error) { return console.log(error); }, function () { return console.log('terminado'); });
    };
    SearchComponent.prototype.setArtist = function (artist) {
        this.spotify.setArtist(artist);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SearchComponent.prototype, "searchString", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search',
            templateUrl: 'search.component.html'
        }), 
        __metadata('design:paramtypes', [spotify_services_1.SpotifyService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map