// Importaciones del sistema
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importaciones propias
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComboComponent } from './combo.component';
import { ExchangeService } from './exchange.service';

// Alias o Decoradores
@NgModule({
    imports: [BrowserModule,FormsModule],
    declarations:[AppComponent, ComboComponent],
    providers:[ExchangeService],
    bootstrap: [AppComponent]
})
// Exportamos el componente para poderlo usar en otros ficheros
export class AppModule 
{

}