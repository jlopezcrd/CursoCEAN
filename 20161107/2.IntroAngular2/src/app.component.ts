// Importaciones del sistema
import { Component } from '@angular/core';

// Alias o Decoradores
@Component({
    selector:'my-app',
    template:'<h1>Componente principal</h1><random-quote></random-quote>'
})
// Exportamos el componente para poderlo usar en otros ficheros
export class AppComponent {

}