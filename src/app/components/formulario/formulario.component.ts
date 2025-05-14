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
  tests!: any[];
  // Datos para el formulario template-driven
  testDriveModel = {
    model: '',
    contact: [] as string[],
    prueba: '',
    testDate: '',
    email: '',
  };
  carModels: any = [];
  minDate: string;
<<<<<<< HEAD
  maxDate: string;
  modelosProhibidos = ['Focus', 'Aveo', 'Jetta', 'Beetle'];

=======
  modelosProhibidos = ['Focus', 'Aveo', 'Jetta', 'Beetle'];
>>>>>>> 7f0f04c9d225f60c76a832d361c6260e7b1eb765


  constructor(public autosNuevosService: ServicioNuevosAutosService, public autosService: ServicioAutosService) {
    // Configurar fecha mínima
    const today = new Date();
    const maxDateObj = new Date();
    maxDateObj.setDate(today.getDate() + 30); // suma 30 días
    this.maxDate = maxDateObj.toISOString().split('T')[0];
    this.minDate = today.toISOString().split('T')[0];

    //treaemos el array desde el localStorage
    const data = localStorage.getItem('testDriveModel');
    data ? 
    this.tests = JSON.parse(data) :
    this.tests = [];

  }

  successRequest(data: any): void {
    console.log(data);
    this.carModels = data.cars;
    console.log(this.carModels)
    
  }
  nuevos() {
    this.autosNuevosService.getValues().subscribe({
      next: this.successRequest.bind(this),
      error: (err: any) => { console.log(err) }
    });
  }
<<<<<<< HEAD
  seminuevos(){
=======
  seminuevos() {
>>>>>>> 7f0f04c9d225f60c76a832d361c6260e7b1eb765
    this.autosService.getValues().subscribe({
      next: this.successRequestS.bind(this),
      error: (err: any) => { console.log(err) }
    });

  }
  successRequestS(data: any): void {
    console.log(data);
    this.carModels = data.cars;
    console.log(this.carModels)
  }
  onTestDriveSubmit(form: NgForm) {

    if (form.valid) {
      // Guardar testDriveModel en localStorage
      this.tests.push(this.testDriveModel);
      localStorage.setItem('testDriveModel', JSON.stringify(this.tests));
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
<<<<<<< HEAD
 isPistaNoDisponible(date: string): boolean {
  const [year, month, day] = date.split('-').map(Number);
  const d = new Date(year, month - 1, day); // mes empieza en 0, usa la hora local del navegador

  const diaMes = d.getDate();

  console.log('Día del mes:', diaMes);

  // No disponible en  días pares
  return  diaMes % 2 === 0;
}
isPruebaNoDisponible(date: string): boolean {
  const [year, month, day] = date.split('-').map(Number);
  const d = new Date(year, month - 1, day); // mes empieza en 0, usa la hora local del navegador
  const diaSemana = d.getDay();
  // No disponible en fines de semana
  return diaSemana === 0 || diaSemana === 6
  
}
isModeloProhibido(): boolean {
  return this.modelosProhibidos.includes(this.testDriveModel.model);
}


 
=======
  isPistaNoDisponible(date: string): boolean {
    const d = new Date(date);
    const diaSemana = d.getDay(); // 0 = domingo, 6 = sábado
    const diaMes = d.getDate();   // 1 al 31

    // No disponible en fines de semana o días pares
    return diaSemana === 0 || diaSemana === 6 || diaMes % 2 === 0;
  }

>>>>>>> 7f0f04c9d225f60c76a832d361c6260e7b1eb765
}