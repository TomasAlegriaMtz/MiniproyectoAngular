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
 modelosProhibidos = ['Focus', 'Aveo', 'Jetta', 'Beetle'];


  constructor(public autosNuevosService : ServicioNuevosAutosService, public autosService: ServicioAutosService) {
    // Configurar fecha mínima
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    
    
  }
esModeloPermitido(modelo: string): boolean {
  return !this.modelosProhibidos.includes(modelo);
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
  onTestDriveSubmit(form: NgForm) {
    if (form.valid) {
      // Guardar testDriveModel en localStorage
      localStorage.setItem('testDriveModel', JSON.stringify(this.testDriveModel));
      console.log('Datos guardados en localStorage:', this.testDriveModel);
      // Opcional: Mostrar mensaje de éxito con SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Datos del formulario guardados en localStorage.',
      });
    } else {
      console.log('Formulario no válido');
      // Opcional: Mostrar mensaje de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa el formulario correctamente.',
      });
    }
  }
 isPistaNoDisponible(date: string): boolean {
  const d = new Date(date);
  const diaSemana = d.getDay(); // 0 = domingo, 6 = sábado
  const diaMes = d.getDate();   // 1 al 31

  // No disponible en fines de semana o días pares
  return diaSemana === 0 || diaSemana === 6 || diaMes % 2 === 0;
}






  
}