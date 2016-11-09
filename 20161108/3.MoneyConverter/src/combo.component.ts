// Importaciones del sistema
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ExchangeService } from './exchange.service';

// Alias o Decoradores
@Component({
    selector:'currency-selector',
    template:`<select [ngModel] = "selected" (ngModelChange)="onSelectedChange($event)">
        <option *ngFor="let currency of supportedCurrencies" [value]="currency">{{currency}}</option>
    </select>`
})

// Exportamos el componente para poderlo usar en otros ficheros
export class ComboComponent {

    @Input() selected: string;
    @Output() selectedChange = new EventEmitter<string>();
    supportedCurrencies: string[];

    constructor(private exchangeService: ExchangeService)
    {
        this.supportedCurrencies = exchangeService.supportCurrencies;
    }

    onSelectedChange(selected:string)
    {
        this.selectedChange.emit(selected);
    }

}