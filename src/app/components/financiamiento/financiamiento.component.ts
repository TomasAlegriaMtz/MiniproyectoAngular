import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-financiamiento',
  imports: [FormsModule, CommonModule],
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.css']
})
export class FinanciamientoComponent {
  precioVehiculo: number = 300000;
  enganche: number = 60000;
  plazo: number = 36;
  tasaInteres: number = 12;

  mensualidad: number = 0;
  totalCredito: number = 0;

  calcular() {
    const montoFinanciar = this.precioVehiculo - this.enganche;
    const tasaMensual = this.tasaInteres / 100 / 12;
    const numPagos = this.plazo;

    // Fórmula de amortización
    const mensualidad = (montoFinanciar * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -numPagos));
    this.mensualidad = Math.round(mensualidad);
    this.totalCredito = Math.round(mensualidad * numPagos);
  }
}
