import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ReadmoreComponent } from './components/pages/readmore.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { routing } from './app.routing';
import { SpotifyService } from './services/spotify.services';

@NgModule({
  imports:      [ BrowserModule, routing, HttpModule, JsonpModule, FormsModule ],
  declarations: [ AppComponent, AlbumComponent, ArtistComponent, NavbarComponent, JumbotronComponent, HomeComponent, AboutComponent, ReadmoreComponent, SearchComponent ],
  providers: [ SpotifyService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
