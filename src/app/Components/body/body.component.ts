import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  ventanaEmergenteVisible: boolean = false;

  mostrarVentanaEmergente() {
    this.ventanaEmergenteVisible = true;
  }

  cerrarVentanaEmergente() {
    this.ventanaEmergenteVisible = false;
  }
}


