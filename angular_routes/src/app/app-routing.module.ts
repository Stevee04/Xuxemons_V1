import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BienvenidaComponent} from "./paginas/bienvenida/bienvenida.component";
import {ArticulosComponent} from "./paginas/articulos/articulos.component";
import {ErrorComponent} from "./paginas/error/error.component";
import {SobreMiComponent} from "./paginas/sobre-mi/sobre-mi.component";
import * as path from "path";
import {ArticuloDetalleComponent} from "./paginas/articulos/articulo-detalle/articulo-detalle.component";
import {ArticuloListaComponent} from "./paginas/articulos/articulo-lista/articulo-lista.component";

const routes: Routes = [
  {
    path: 'welcome',
    component: BienvenidaComponent,
  },
  {
    path: 'articles', component: ArticulosComponent,
    children: [
      {path: 'list', component: ArticuloListaComponent},
      {path: 'article/:id', component: ArticuloDetalleComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  },
  {
    path: 'about-me', component: SobreMiComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/error',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
