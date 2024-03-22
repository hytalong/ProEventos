
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PalestrantesComponent } from './palestrantes/palestrantes.component';

import { HttpClientModule } from '@angular/common/http';
import { EventosComponent } from './eventos/eventos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
    declarations: [
      AppComponent,
      EventosComponent,
      PalestrantesComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule
  ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})


export class AppModule { }
/*export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};*/
