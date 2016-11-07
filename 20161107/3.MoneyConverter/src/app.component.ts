// Importaciones del sistema
import { Component } from '@angular/core';

// Alias o Decoradores
@Component({
    selector:'my-app',
    // EL [] del value es asignar el input del output de baseAmount
    template:`<input type="number" [(ngModel)] ="baseAmount">
        <currency-selector></currency-selector> = <strong>{{targetAmount}}</strong> 
        <currency-selector></currency-selector>
        <p *ngIf="isInvalid(baseAmount)">Introduzca un valor numerico</p>
        `,
    styles: [`
        input[type="number"] {
            width: 10ex;
            text-align: right;
        }
    `]
})
// Exportamos el componente para poderlo usar en otros ficheros
export class AppComponent {
    baseAmount:number = 1;
    targetAmount:number = 0.70;

    isInvalid(value) {
        return !Number.isFinite(value);
    }
}