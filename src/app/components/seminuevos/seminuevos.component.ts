import { Component } from '@angular/core';
import { ServicioAutosService } from './servicio-autos.service';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-seminuevos',
  imports: [CurrencyPipe, UpperCasePipe, DatePipe],
  templateUrl: './seminuevos.component.html',
  styleUrl: './seminuevos.component.css'
})
export class SeminuevosComponent {
  array: any = [];

  //Inyectamos el servicio en este componente
  constructor(public autosSeminuevosService: ServicioAutosService) {

    //recuperamos los datos en el constructor
    this.autosSeminuevosService.getValues().subscribe({
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
