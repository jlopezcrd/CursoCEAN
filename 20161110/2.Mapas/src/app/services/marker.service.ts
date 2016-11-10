import { Injectable } from '@angular/core';
import { Init } from '../init-markers';

export class MarkerService extends Init {

    constructor() {

        super();
        this.load();

    }

    getMarkers() {
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }

}