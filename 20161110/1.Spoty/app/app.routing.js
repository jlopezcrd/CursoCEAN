"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./components/pages/about.component');
var readmore_component_1 = require('./components/pages/readmore.component');
var search_component_1 = require('./components/search/search.component');
var artist_component_1 = require('./components/artist/artist.component');
var album_component_1 = require('./components/album/album.component');
var appRoutes = [
    {
        path: '',
        component: search_component_1.SearchComponent,
    }, {
        path: 'about',
        component: about_component_1.AboutComponent
    }, {
        path: 'readmore',
        component: readmore_component_1.ReadmoreComponent
    }, {
        path: 'artist/:idArtist',
        component: artist_component_1.ArtistComponent
    }, {
        path: 'album/:idAlbum',
        component: album_component_1.AlbumComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map