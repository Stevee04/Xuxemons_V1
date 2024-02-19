import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorComponent} from './paginas/error/error.component';
import {BienvenidaComponent} from './paginas/bienvenida/bienvenida.component';
import {SobreMiComponent} from './paginas/sobre-mi/sobre-mi.component';
import {ArticulosComponent} from './paginas/articulos/articulos.component';
import {ArticuloComponent} from './paginas/articulos/articulo/articulo.component';
import {ArticuloDetalleComponent} from './paginas/articulos/articulo-detalle/articulo-detalle.component';
import { ArticuloListaComponent } from './paginas/articulos/articulo-lista/articulo-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    BienvenidaComponent,
    SobreMiComponent,
    ArticulosComponent,
    ArticuloComponent,
    ArticuloDetalleComponent,
    ArticuloListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
