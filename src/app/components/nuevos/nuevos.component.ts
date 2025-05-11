import { Component } from '@angular/core';
import { ServicioNuevosAutosService } from './servicio-nuevos-autos.service';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-nuevos',
  imports: [CurrencyPipe, UpperCasePipe, DatePipe, BuscadorComponent],
  templateUrl: './nuevos.component.html',
  styleUrl: './nuevos.component.css'
})
export class NuevosComponent {
  //declaramos un array donde se almacenara el JSON
  array: any = []; //este sera modificado en el componente hijo que sera el buscador
  arrayCopy: any = [];
  flag: boolean = false;

  //Inyectamos el servicio en este componente
  constructor(public autosNuevosService: ServicioNuevosAutosService) {
    //recuperaremos los datos en el constructor

    this.autosNuevosService.getValues().subscribe({
      next: this.successRequest.bind(this),
      error: (err: any) => { console.log(err) }
    });

  }

  arrayModified(arrayCarsChanged: any): void {
    this.array = arrayCarsChanged;
  }

  successRequest(data: any): void {
    //console.log(data);
    this.arrayCopy = this.array = data.cars;
    //console.log(this.array);
    this.flag = true;
    this.arrayCopy = this.array;
  }
}
