import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
      localStorage.setItem('serviciosModel', JSON.stringify(this.arrayServicesList));
      this.servicioSeleccionado = null;
    }
  }

  deleteRegister(index: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        //eliminamos el registro cuando se seleccione el icono de trash
        this.arrayServicesList.splice(index, 1);
        console.log(this.arrayServicesList);
        //Guardamos en el localStorage de nuevo
        localStorage.setItem('serviciosModel', JSON.stringify(this.arrayServicesList));
        this.servicioSeleccionado = null;
      }
    });
  }

}
