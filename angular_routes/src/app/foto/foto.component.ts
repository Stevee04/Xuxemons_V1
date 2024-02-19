import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Foto } from '../models/foto.model';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {

  @Input() foto: Foto;
  @Output() guardarCambios = new EventEmitter<Foto>();

  editando: boolean = false;
  
  constructor() {
    this.foto = { id: -1, nombre: "", imagen: "", tipo: ""};
  }

  // Editar si no se está editando y guardar los cambios si se está editando
  cambiarEdicion() {
    if (this.editando) {
      this.guardarCambios.emit(this.foto);
    }

    this.editando = !this.editando;
  }
}
