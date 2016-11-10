import { Component } from '@angular/core';

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.css']
})

export class AppComponent {

    title     = 'Busca tu casa!!';
    latitude  = 41.648823;
    longitude = -0.889085;
    name      = 'casa';
    draggable = true;
    
    zoom      : number = 12;
    markers   : Marker[] = [
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

    formName      : string  = 'Jorge';
    formLatitude  : string  = '51.648823';
    formLongitude : string  = '-0.889085';
    formDraggable : boolean = true;

    clickedMarker(marker: Marker, index: number) {
        //alert(`Has pulsado ${marker.name} en la posicion ${index}`);
        console.log(marker);
    }

    addMarker(marker: Marker) {
        this.markers.push(marker);
    }

    mapClick(data: any) {

        console.log(data);

        //var marker = new Marker(coords.latitude, coords.longitude, 'Epoca', true);
        var marker : Marker= {
            name      : 'Epoca Dorada 3',
            latitude  : data.coords.lat,
            longitude : data.coords.lng, 
            draggable : true
        }

        //this.markers.push(marker);
        this.addMarker(marker);
    }

    submitMarker(event: any) {
        //event.preventDefault();

        if (this.formDraggable === true) {
            var isDraggable = true;
        } else {
            var isDraggable = false;
        }

        var marker : Marker= {
            latitude  : parseFloat(this.formLatitude),
            longitude : parseFloat(this.formLongitude),
            name      : this.formName,
            draggable : isDraggable
        };
        
        this.addMarker(marker);
    }

};

interface MarkerInterface {
    latitude  : number;
    longitude : number;
    name?     : string;
    draggable : boolean;
}

class Marker implements MarkerInterface {
    latitude  : number;
    longitude : number;
    name?     : string;
    draggable : boolean;

    constructor(latitude: number, longitude: number, 
        name           : string = '', draggable: boolean) {
        this.latitude  = latitude;
        this.longitude = longitude;
        this.name      = name;
        this.draggable = draggable;
    }
}