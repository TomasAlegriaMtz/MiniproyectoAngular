import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  //Recibir el array de carros
  @Input() arrayCars!: any;

  //Emitir un evento o senial, para que este sea captado por el componente padre, le pondremos un 'any', para evitarnos poner el tipo de array que enviaremos
  @Output() arrayChanged = new EventEmitter<any>();

  arrayCarsCopy!: any;
  consulta!: string;

  ngOnInit(): void {
    console.log("This is an array since buscador component -->");
    console.log(this.arrayCars);
  }

  emitSignal(): void {
    const query = this.consulta?.toString().toLowerCase() || "";
  
    this.arrayCarsCopy = this.arrayCars.filter((car: any) => {
      if (!car) return false; // Asegura que el elemento exista
      console.log(car);

      return (
        car.id?.toString() === query ||
        car.brand?.toLowerCase().includes(query) ||
        car.model?.toLowerCase().includes(query) ||
        car.year?.toString() === query ||
        car.color?.toLowerCase().includes(query) ||
        car.price?.toString().includes(query) ||
        car.fuel_type?.toLowerCase().includes(query) ||
        car.transmission?.toLowerCase().includes(query) ||
        car.mileage?.toString().includes(query) ||
        (query === "disponible" && car.available) ||
        (query === "no disponible" && !car.available) ||
        (Array.isArray(car.features) && car.features.some((feature: any) => feature.toLowerCase().includes(query))) ||
        car.location?.toLowerCase().includes(query)
      );
    });

    this.arrayChanged.emit(this.arrayCarsCopy);
  }
}
