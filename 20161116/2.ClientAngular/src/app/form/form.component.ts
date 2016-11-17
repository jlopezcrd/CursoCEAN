import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { PeliculasService } from '../services/peliculas.services';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    formTitulo   : string;
    formAutor    : string;
    formDuracion : number;

    listAlbum = any;

    constructor(
        public peliculas: PeliculasService,
        private activatedRoute: ActivatedRoute, private router: Router) { };
    );

    submitPelicula(event)
    {
        console.log(this.formTitulo);
        console.log(this.formAutor);
        console.log(this.formDuracion);

        this.activatedRoute.params.map(params => params['idArtist'])
        .subscribe((id) => {
        this.peliculas.getMovies()
          .subscribe(
            data => {
              debugger;
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
