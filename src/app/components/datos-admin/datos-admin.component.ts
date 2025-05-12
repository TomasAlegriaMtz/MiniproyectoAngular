import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-admin',
  imports: [FormsModule],
  templateUrl: './datos-admin.component.html',
  styleUrl: './datos-admin.component.css'
})
export class DatosAdminComponent {
  arrayServicesList!: any[];
  servicioSeleccionado: any = null;
  serviciosEditados: string = '';

  //Guardamos los datos si es que hay
  constructor() {
    const data = localStorage.getItem('serviciosModel');
    data ?
      this.arrayServicesList = JSON.parse(data) :
      this.arrayServicesList = [];

    //console.log(this.arrayServicesList);
  }


  seleccionarServicio(servicio: any): void {
    this.servicioSeleccionado = { ...servicio };
    this.serviciosEditados = servicio.services.join(', ');
  }

  guardarCambios(): void {
    // Actualiza el array original y lo mandaremos al localStorage
    const index = this.arrayServicesList.findIndex(s =>
      s.number === this.servicioSeleccionado.number
    );

    if (index > -1) {
      this.servicioSeleccionado.services = this.serviciosEditados.split(',').map(s => s.trim());
      this.arrayServicesList[index] = this.servicioSeleccionado;
      localStorage.setItem('serviciosModel',JSON.stringify(this.arrayServicesList));
      this.servicioSeleccionado = null;
    }
  }

}
