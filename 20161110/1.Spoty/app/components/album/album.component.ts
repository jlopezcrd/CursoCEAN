import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.services';
import { Song } from '../../models/song.model';

@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html'
})
export class AlbumComponent implements OnInit {

  listSongs: Song[];
  image: string;

  constructor(
    public spotify: SpotifyService, private activatedRoute: ActivatedRoute, private router: Router) { };

  ngOnInit() {
    this.activatedRoute.params.map(params => params['idAlbum'])
      .subscribe((id) => {
      this.spotify.getSongsByAlbum(id)
          .subscribe(
            data => {
              this.listSongs = data.tracks.items;
              this.image = data.images[1].url;
              console.log(this.listSongs);
            },
            error => {
              console.log(error);
            },
          );
      });
  }
}
