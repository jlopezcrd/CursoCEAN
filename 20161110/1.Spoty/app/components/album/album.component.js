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
var router_1 = require('@angular/router');
var spotify_services_1 = require('../../services/spotify.services');
var AlbumComponent = (function () {
    function AlbumComponent(spotify, activatedRoute, router) {
        this.spotify = spotify;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ;
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.map(function (params) { return params['idAlbum']; })
            .subscribe(function (id) {
            _this.spotify.getSongsByAlbum(id)
                .subscribe(function (data) {
                _this.listSongs = data.tracks.items;
                _this.image = data.images[1].url;
                console.log(_this.listSongs);
            }, function (error) {
                console.log(error);
            });
        });
    };
    AlbumComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'album',
            templateUrl: 'album.component.html'
        }), 
        __metadata('design:paramtypes', [spotify_services_1.SpotifyService, router_1.ActivatedRoute, router_1.Router])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map