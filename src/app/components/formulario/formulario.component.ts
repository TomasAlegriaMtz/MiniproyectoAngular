import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServicioNuevosAutosService } from '../nuevos/servicio-nuevos-autos.service';
import { ServicioAutosService } from '../seminuevos/servicio-autos.service';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule
  ],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  // Datos para el formulario template-driven
  testDriveModel = {
    model: '',
    contact: [] as string[],
    prueba: '',
    testDate: '',
    email: '',
  };
  carModels : any = [];
  minDate: string;
  constructor(public autosNuevosService : ServicioNuevosAutosService, public autosService: ServicioAutosService) {
    // Configurar fecha mínima
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    
    
  }

  successRequest(data:any):void{
    console.log(data);
    this.carModels = data.cars;
    console.log(this.carModels)
  }
  nuevos(){
    this.autosNuevosService.getValues().subscribe({
      next: this.successRequest.bind(this),
      error: (err:any) => {console.log(err)}
    });
  }
  seminuevos(){
    this.autosNuevosService.getValues().subscribe({
      next: this.successRequestS.bind(this),
      error: (err:any) => {console.log(err)}
    });
  }
  successRequestS(data:any):void{
    console.log(data);
    this.carModels = data.cars;
    console.log(this.carModels)
  }
  onTestDriveSubmit(){

  }



  
}