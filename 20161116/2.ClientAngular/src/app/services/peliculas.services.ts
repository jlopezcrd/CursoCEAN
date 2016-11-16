import { Injectable } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';

//import { Artist } from '../models/artist.model';

const base_url = "https://api.spotify.com/v1";
const fin_url = "&offset=0&limit=10&type=";

@Injectable()
export class PeliculasService {

    /*public artist: Artist;

    constructor(private _http: Http) {

    }

    getSearchArtist(artist: string, type = 'artist') {
        return this._http.get(`${base_url}/search?query=${artist}${fin_url}${type}&market=ES`)
            .map(res => res.json());
    }

    getAlbumsByArtist(idArtist: string) {
        return this._http.get(`${base_url}/artists/${idArtist}/albums?market=ES`)
            .map(res => res.json());
    }

    getSongsByAlbum(idAlbum: string) {
         return this._http.get(`${base_url}/albums/${idAlbum}?market=ES`)
            .map(res => res.json());
    }

    getPreviewSongFromAlbum(idAlbum: string) {
        //debugger;
        console.log("servicio");
        return this._http.get(`${base_url}/albums/${idAlbum}/tracks?market=ES`)
            .map(res => res.json());
    }

    getArtist() {
        return this.artist;
    }

    setArtist(artist: Artist) {
        this.artist = artist;
    }*/
}