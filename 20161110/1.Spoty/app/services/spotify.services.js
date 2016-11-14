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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var base_url = "https://api.spotify.com/v1";
var fin_url = "&offset=0&limit=10&type=";
var SpotifyService = (function () {
    function SpotifyService(_http) {
        this._http = _http;
    }
    SpotifyService.prototype.getSearchArtist = function (artist, type) {
        if (type === void 0) { type = 'artist'; }
        return this._http.get(base_url + "/search?query=" + artist + fin_url + type + "&market=ES")
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbumsByArtist = function (idArtist) {
        return this._http.get(base_url + "/artists/" + idArtist + "/albums?market=ES")
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getSongsByAlbum = function (idAlbum) {
        return this._http.get(base_url + "/albums/" + idAlbum + "?market=ES")
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getPreviewSongFromAlbum = function (idAlbum) {
        //debugger;
        console.log("servicio");
        return this._http.get(base_url + "/albums/" + idAlbum + "/tracks?market=ES")
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function () {
        return this.artist;
    };
    SpotifyService.prototype.setArtist = function (artist) {
        this.artist = artist;
    };
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.services.js.map