// Importaciones del sistema
import { Component } from '@angular/core';

import { ExchangeService } from './exchange.service';

// Alias o Decoradores
@Component({
    selector:'my-app',
    // EL [] del value es asignar el input del output de baseAmount
    template:`<input type="number" [(ngModel)] ="baseAmount"
        [class.error]="isInvalid(baseAmount)">
        <currency-selector [(selected)]="baseCurrency"></currency-selector> = <strong>{{targetAmount}}</strong> 
        <currency-selector [(selected)]="targetCurrency"></currency-selector>
        <p *ngIf="isInvalid(baseAmount)">Introduzca un valor numerico</p>
        `,
    styles: [`
        input[type="number"] {
            width: 10ex;
            text-align: right;
        }
        .error {
            background-color: #ff6666;
        }
    `]
})
// Exportamos el componente para poderlo usar en otros ficheros
export class AppComponent {
    baseAmount:number = 2;
    targetCurrency = 'GBP';
    baseCurrency = 'EUR';


    constructor(private exchangeService:ExchangeService)
    {

    }

    get targetAmount()
    {
        const exchangeRate = this.exchangeService.getExchangeRate(this.baseCurrency, this.targetCurrency);
        return this.baseAmount * exchangeRate;
    }

    isInvalid(value) {
        return !Number.isFinite(value);
    }
}