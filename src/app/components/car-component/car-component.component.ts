import { Component, OnInit } from '@angular/core';
import { AutosNuevosService } from './autos-nuevos.service';
import { AutosUsadosService } from './autos-usados.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-component',
  imports: [RouterModule],
  templateUrl: './car-component.component.html',
  styleUrl: './car-component.component.css'
})
export class CarComponentComponent implements OnInit {
  arrayAutosNuevos: any[] = [];
  arrayAutosUsados: any[] = [];
  car!: any;

  carId!: number;
  isNew!: boolean;

  constructor(
    public autosNuevosService: AutosNuevosService,
    public autosUsadosService: AutosUsadosService,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtenemos los parametros
    this.activatedRoute.params.subscribe(params => {
      this.carId = Number(params['id']);
      this.isNew = params['isNew'] === 'true';

      //ahora cargaremos los datos
      this.loadData();
    });
  }

  loadData(): void {
    //mandamos a llamar la API al mismo tiempo
    this.autosNuevosService.getValues().subscribe({
      next: (data: any) => {
        this.arrayAutosNuevos = data.cars;
        this.trySetCar();
      },
      error: (err: any) => console.log(err)
    });

    this.autosUsadosService.getValues().subscribe({
      next: (data: any) => {
        this.arrayAutosUsados = data.cars;
        this.trySetCar();
      },
      error: (err: any) => console.log(err)
    });
  }

  trySetCar(): void {
    // Solo asignamos el carro si aún no está asignado y los arrays ya están cargados
    if (this.car) return;

    if (this.isNew && this.arrayAutosNuevos.length) {
      this.car = this.arrayAutosNuevos.find(car => car.id === this.carId);
    } else if (!this.isNew && this.arrayAutosUsados.length) {
      this.car = this.arrayAutosUsados.find(car => car.id === this.carId);
    }
  }
}