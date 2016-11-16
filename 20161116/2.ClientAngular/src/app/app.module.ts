import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent }  from './views/home.component';
import { NewComponent } from './views/new.component';

import { PeliculasService } from './services/peliculas.services';

@NgModule({
  declarations: [
    AppComponent, FormComponent, NavbarComponent, HomeComponent, NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ PeliculasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
