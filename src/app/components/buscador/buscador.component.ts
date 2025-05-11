import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  imports: [],
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
    //enviaremos donde se almacena los datos modificados
    this.arrayChanged.emit(this.arrayCarsCopy);
  }
}
