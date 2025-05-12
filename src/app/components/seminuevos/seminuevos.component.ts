import { Component } from '@angular/core';
import { ServicioAutosService } from './servicio-autos.service';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { BuscadorComponent } from '../buscador/buscador.component';
import { FinanciamientoComponent } from '../financiamiento/financiamiento.component';

@Component({
  selector: 'app-seminuevos',

  standalone:true,
  imports: [CurrencyPipe, UpperCasePipe, DatePipe, BuscadorComponent, FinanciamientoComponent],

  templateUrl: './seminuevos.component.html',
  styleUrl: './seminuevos.component.css'
})
export class SeminuevosComponent {
  array: any = []; //este sera modificado en el componente hijo que sera el buscador
  arrayCopy: any = [];
  flag: boolean = false;

  //Inyectamos el servicio en este componente
  constructor(public autosSeminuevosService: ServicioAutosService) {

    //recuperamos los datos en el constructor
    this.autosSeminuevosService.getValues().subscribe({
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
  }
}
