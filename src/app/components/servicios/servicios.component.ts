import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators, ValidatorFn, FormArray, AbstractControl,ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import { FinanciamientoComponent } from '../financiamiento/financiamiento.component';



@Component({
  selector: 'app-servicios',
  standalone:true,
  imports: [ReactiveFormsModule, FinanciamientoComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  // Lista de servicios disponibles
  servicesList = [
    { id: 'oilChange', name: 'Cambio de aceite' },
    { id: 'alignment', name: 'Alineación y balanceo' },
    { id: 'brakes', name: 'Revisión de frenos' },
    { id: 'maintenance', name: 'Mantenimiento general' },
    { id: 'diagnostic', name: 'Diagnóstico de fallas' }
  ];
  /*formularioReactivo para los servicios*/
  public form : FormGroup = new FormGroup({
    nombre : new FormControl('', [Validators.required, Validators.pattern('[A-Za-z\\s]+')]),
    number : new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')]),
    model : new FormControl('', Validators.required),
    year : new FormControl ('',[Validators.required, Validators.pattern('^[0-9]{4}$'), Validators.min(1970), Validators.max(2025)] ),
    services: new FormArray(
      [
        new FormControl(false), // Cambio de aceite
        new FormControl(false), // Alineación y balanceo
        new FormControl(false), // Revisión de frenos
        new FormControl(false), // Mantenimiento general
        new FormControl(false)  // Diagnóstico de fallas
      ],
      [this.minSelectedCheckboxes(1)] // Al menos un servicio seleccionado
    ),
  });

  validar() {
    if (this.form.valid) {
      // Mapear los servicios seleccionados a sus IDs
      const selectedServices = this.form.value.services
        .map((checked: boolean, index: number) => checked ? this.servicesList[index].id : null)
        .filter((id: string | null) => id !== null);

      // Crear objeto para guardar en localStorage
      const formValue = {
        ...this.form.value,
        services: selectedServices // Reemplazar el array de booleanos por los IDs de servicios
      };

      localStorage.setItem('serviciosModel', JSON.stringify(formValue));
      console.log('Datos guardados en localStorage:', formValue);
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Datos del formulario guardados correctamente.',
      });
      this.form.reset();
    } else {
      this.form.markAllAsTouched(); // Mostrar todos los errores
      console.log('Formulario no válido');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa el formulario correctamente.',
      });
    }
  }
  public  minSelectedCheckboxes(min: number = 1) : ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formArray = control as FormArray;
    const totalSelected = formArray.controls.filter(control => control.value).length;
    return totalSelected >= min ? null : { minSelected: true };
  };
  }
  // Getter para el FormArray de services
  get servicesControls() {
    return this.form.get('services') as FormArray;
  }
}
