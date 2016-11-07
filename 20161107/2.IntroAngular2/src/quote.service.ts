import { Quote } from './quote.model';

export class QuoteService
{
    quotes: Quote[];

    constructor()
    {
        this.quotes = sampleQuotes;
    }

    // Hacemos la funcion privada para poder llamarla solo desde aqui
    private getRandomQuote(): Quote
    {
        const randomIndex = Math.floor(Math.random()*this.quotes.length);
        return this.quotes[randomIndex];
    }

    // primer parametro tiempo delay
    // segundo parametro funcion que le pasamos un parametro quote
    // y que no devuelve nada
    // Es la definicion del cuerpo de la funcion
    getRandomQuotesAsinc(delay:number, callback:(quote:Quote)=>void)
    {
        // Devolvemos una primera cita para que este instanciado
        callback(this.getRandomQuote());
        // Devolvemos una funcion con un delay que devolverá la cita
        setTimeout(() => {
            callback(this.getRandomQuote());
        }, delay);
    }
}

// array citas
const sampleQuotes: Quote[] = [
    {
        "line":"Cita 1",
        "autor":"Autor de Cita 1"
    },
    {
        "line":"Cita 2",
        "autor":"Autor de Cita 2"
    },
    {
        "line":"Cita 3",
        "autor":"Autor de Cita 3"
    },
    {
        "line":"Cita 4",
        "autor":"Autor de Cita 4"
    }
];