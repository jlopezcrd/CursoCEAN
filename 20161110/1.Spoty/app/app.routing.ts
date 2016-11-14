import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { HomeComponent }  from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ReadmoreComponent } from './components/pages/readmore.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const appRoutes: Routes = [
    {
        path:'',
        component:SearchComponent,
    }, {
        path:'about',
        component:AboutComponent
    },{
        path:'readmore',
        component:ReadmoreComponent
    },{
        path:'artist/:idArtist',
        component:ArtistComponent
    },{
        path:'album/:idAlbum',
        component:AlbumComponent
    }

    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);