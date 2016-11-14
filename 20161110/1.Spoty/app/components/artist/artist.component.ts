import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.services';
import { Album } from '../../models/album.model';
import { Artist } from '../../models/artist.model';

@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {

  idArtist: string;
  listAlbum: Album[];
  artist: Artist;

  constructor(
    public spotify: SpotifyService, private activatedRoute: ActivatedRoute, private router: Router) { };

  
  getPreviewSongFromAlbum(idArtist: string) {
    var response = this.spotify.getPreviewSongFromAlbum(idArtist);
    console.log(response);
    //this.router.navigateByUrl(url);
  }
  

  ngOnInit() {
    this.artist = this.spotify.getArtist();
    this.activatedRoute.params.map(params => params['idArtist'])
      .subscribe((id) => {
      this.spotify.getAlbumsByArtist(id)
          .subscribe(
            data => {
              //debugger;
              this.listAlbum = data.items;
              console.log(this.listAlbum);
            },
            error => {
              console.log(error);
            },
          );
      });
  }
}
