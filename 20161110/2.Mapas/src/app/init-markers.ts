export class Init {

    load() {

        var markers: [
            {
                name      : 'Epoca Dorada',
                latitude  : 41.648823,
                longitude : -0.889085, 
                draggable : true
            },
            {
                name      : 'Epoca Dorada 2',
                latitude  : 41.64824,
                longitude : -0.886073, 
                draggable : true
            },
            {
                name      : 'Epoca Dorada 3',
                latitude  : 41.648686,
                longitude : -0.889506, 
                draggable : true
            }
        ];

        localStorage.setItem('markers',JSON.stringify(markers));
    }

}