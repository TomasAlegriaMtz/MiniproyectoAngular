import { Component } from '@angular/core';
import { ServicioNuevosAutosService } from './servicio-nuevos-autos.service';

@Component({
  selector: 'app-nuevos',
  standalone:true,
  imports: [],
  templateUrl: './nuevos.component.html',
  styleUrl: './nuevos.component.css'
})
export class NuevosComponent {
  //declaramos un array donde se almacenara el JSON
  array: any = [];

  //Inyectamos el servicio en este componente
  constructor(public autosNuevosService: ServicioNuevosAutosService) {
    //recuperaremos los datos en el constructor

    this.autosNuevosService.getValues().subscribe({
      next: this.successRequest.bind(this),
      error: (err: any) => { console.log(err) }
    });
  }

  successRequest(data: any): void {
    console.log(data);
    this.array = data.cars;
    console.log(this.array);
  }
}
