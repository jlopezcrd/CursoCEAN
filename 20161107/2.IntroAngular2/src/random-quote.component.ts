// Importaciones del sistema
import { Component } from '@angular/core';

// Imports nuestros
import { QuoteService } from './quote.service';
import { Quote } from './quote.model';

// Alias o Decoradores
@Component({
    selector:'random-quote',
    template:`<em>Citas de autor</em>
        <p><em>{{quote.line}}</em> - {{quote.autor}}</p>`
})
// Exportamos el componente para poderlo usar en otros ficheros
export class RandomQuoteComponent {
    //quote:Quote = {'line':'','autor':''};
    quote:Quote;
    constructor(quoteService:QuoteService)
    {
        //this.quote = quoteService.getRandomQuote();
        //quoteService.getRandomQuotesAsinc(2000, (quote) => {this.quote = quote});
        quoteService.getRandomQuotesAsinc(2000, quote => this.quote = quote);
    }

}