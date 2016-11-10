import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ApplicationRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGFAEXwk9NLoeGiOBNk27In5_TVz8QnRU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
