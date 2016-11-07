// Importaciones del sistema
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importaciones propias
import { AppComponent } from './app.component';
import { RandomQuoteComponent } from './random-quote.component';
import { QuoteService } from './quote.service';

// Alias o Decoradores
@NgModule({
    imports: [BrowserModule],
    declarations:[AppComponent, RandomQuoteComponent],
    providers: [QuoteService],
    bootstrap: [AppComponent]
})
// Exportamos el componente para poderlo usar en otros ficheros
export class AppModule 
{

}