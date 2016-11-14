import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SpotifyService } from '../../services/spotify.services';
import { Artist } from '../../models/artist.model';

@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent { 

  listArtist: Artist[];
  @Input() searchString: string;

  constructor(public spotify: SpotifyService) {

  }

  searchMusic() {
    console.log(this.searchString);
    this.spotify.getSearchArtist(this.searchString).subscribe(
        value => {
          this.listArtist = value.artists.items;
          console.log(value);
        },
        error => console.log(error),
        () => console.log('terminado'));
  }

  setArtist(artist: Artist) {
    this.spotify.setArtist(artist);
  }

}
