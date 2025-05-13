import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      pregunta: '¿Qué documentos necesito para financiar un auto?',
      respuesta: 'Necesitas identificación oficial, comprobante de ingresos y comprobante de domicilio.',
      abierta: false
    },
    {
      pregunta: '¿Puedo apartar un auto en línea?',
      respuesta: 'Sí, puedes hacerlo mediante un anticipo y completar tu información por WhatsApp o en la agencia.',
      abierta: false
    },
    {
      pregunta: '¿Qué garantía tienen los autos seminuevos?',
      respuesta: 'Todos nuestros seminuevos tienen garantía mínima de 3 meses sobre motor y transmisión.',
      abierta: false
    }
  ];

  toggle(i: number) {
    this.faqs[i].abierta = !this.faqs[i].abierta;
  }
}