import { Component } from '@angular/core';
import {Foto} from "./models/foto.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'VideoTutorial';
  tipo = "";

  fotos: Foto[] = [
    { id: 1, nombre: "Apleki", tipo: "Tierra", imagen: "assets/img/apleki.png"},
    { id: 2, nombre: "Avecrem", tipo: "Aire", imagen: "assets/img/avecrem.png"},
    { id: 3, nombre: "Bambino", tipo: "Tierra", imagen: "assets/img/bambino.png"},
    { id: 4, nombre: "Beeboo", tipo: "Aire", imagen: "assets/img/beeboo.png"},
    { id: 5, nombre: "Boo-hoot", tipo: "Aire", imagen: "assets/img/boo-hoot.png"},
    { id: 6, nombre: "Cabrales", tipo: "Aire", imagen: "assets/img/cabrales.png"},
    { id: 7, nombre: "Catua", tipo: "Tierra", imagen: "assets/img/catua.png"},
    { id: 8, nombre: "Catyuska", tipo: "Aire", imagen: "assets/img/catyuska.png"},
    { id: 9, nombre: "Chapapá", tipo: "Aire", imagen: "assets/img/chapapa.png"},
    { id: 10, nombre: "Chopper", tipo: "Agua", imagen: "assets/img/chopper.png"},
    { id: 11, nombre: "Cuellilargui", tipo: "Tierra", imagen: "assets/img/cuellilargui.png"},
    { id: 12, nombre: "Deskangoo", tipo: "Tierra", imagen: "assets/img/deskangoo.png"},
    { id: 13, nombre: "Doflamingo", tipo: "Tierra", imagen: "assets/img/doflamingo.png"},
    { id: 14, nombre: "Dolly", tipo: "Aire", imagen: "assets/img/dolly.png"},
    { id: 15, nombre: "Elconchudo", tipo: "Tierra", imagen: "assets/img/elconchudo.png"},
    { id: 16, nombre: "Eldientes", tipo: "Agua", imagen: "assets/img/eldientes.png"},
    { id: 17, nombre: "Elgominas", tipo: "Agua", imagen: "assets/img/elgominas.png"},
    { id: 18, nombre: "Flipper", tipo: "Tierra", imagen: "assets/img/flipper.png"},
    { id: 19, nombre: "Floppi", tipo: "Agua", imagen: "assets/img/floppi.png"},
    { id: 20, nombre: "Horseluis", tipo: "Tierra", imagen: "assets/img/horseluis.png"},
    { id: 21, nombre: "Krokolisko", tipo: "Agua", imagen: "assets/img/krokolisko.png"},
    { id: 22, nombre: "Kurama", tipo: "Agua", imagen: "assets/img/kurama.png"},
    { id: 23, nombre: "Ladybug", tipo: "Tierra", imagen: "assets/img/ladybug.png"},
    { id: 24, nombre: "Lengualargui", tipo: "Aire", imagen: "assets/img/lengualargui.png"},
    { id: 25, nombre: "Medusation", tipo: "Tierra", imagen: "assets/img/medusation.png"},
    { id: 26, nombre: "Meekmeek", tipo: "Agua", imagen: "assets/img/meekmeek.png"},
    { id: 27, nombre: "Megalo", tipo: "Tierra", imagen: "assets/img/megalo.png"},
    { id: 28, nombre: "Mocha", tipo: "Agua", imagen: "assets/img/mocha.png"},
    { id: 29, nombre: "Murcimurci", tipo: "Agua", imagen: "assets/img/murcimurci.png"},
    { id: 30, nombre: "Nemo", tipo: "Aire", imagen: "assets/img/nemo.png"},
    { id: 31, nombre: "Oinkcelot", tipo: "Agua", imagen: "assets/img/oinkcelot.png"},
    { id: 32, nombre: "Oreo", tipo: "Tierra", imagen: "assets/img/oreo.png"},
    { id: 33, nombre: "Otto", tipo: "Tierra", imagen: "assets/img/otto.png"},
    { id: 34, nombre: "Pinchimott", tipo: "Tierra", imagen: "assets/img/pinchimott.png"},
    { id: 35, nombre: "Pollis", tipo: "Agua", imagen: "assets/img/pollis.png"},
    { id: 36, nombre: "Posón", tipo: "Aire", imagen: "assets/img/poson.png"},
    { id: 37, nombre: "Quakko", tipo: "Aire", imagen: "assets/img/quakko.png"},
    { id: 38, nombre: "Rajoy", tipo: "Agua", imagen: "assets/img/rajoy.png"},
    { id: 39, nombre: "Rawlion", tipo: "Aire", imagen: "assets/img/rawlion.png"},
    { id: 40, nombre: "Rexxo", tipo: "Tierra", imagen: "assets/img/rexxo.png"},
    { id: 41, nombre: "Ron", tipo: "Tierra", imagen: "assets/img/ron.png"},
    { id: 42, nombre: "Sesssi", tipo: "Tierra", imagen: "assets/img/sesssi.png"},
    { id: 43, nombre: "Shelly", tipo: "Tierra", imagen: "assets/img/shelly.png"},
    { id: 44, nombre: "Sirucco", tipo: "Agua", imagen: "assets/img/sirucco.png"},
    { id: 45, nombre: "Torcas", tipo: "Aire", imagen: "assets/img/torcas.png"},
    { id: 46, nombre: "Trompeta", tipo: "Agua", imagen: "assets/img/trompeta.png"},
    { id: 47, nombre: "Trompi", tipo: "Aire", imagen: "assets/img/trompi.png"},
    { id: 48, nombre: "Tux", tipo: "Tierra", imagen: "assets/img/tux.png"}
   ];
}

