import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FaqComponent],

  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements AfterViewInit {

  @ViewChild('slider', { static: false }) sliderRef!: ElementRef;
  @ViewChild('next', { static: false }) nextRef!: ElementRef;
  @ViewChild('prev', { static: false }) prevRef!: ElementRef;

  items: HTMLElement[] = [];
  nextButton!: HTMLElement;
  prevButton!: HTMLElement;
  active: number = 3;
  stt: number = 0;

  //Se ejecuta una vez después de que la vista del componente y sus hijos (el DOM) ha sido completamente inicializado
  // de esa manera podemos acceder a los elementos hijos para poder usarlos
  ngAfterViewInit(): void {
    //Asignamos las referencias a nuetros botones
    this.nextButton = this.nextRef.nativeElement;
    this.prevButton = this.prevRef.nativeElement;

    //Accedemos a los slides despues de que ya se haya inicializado
    setTimeout(() => {
      this.items = Array.from(this.sliderRef.nativeElement.querySelectorAll('.item'));
      this.loadShadow();
    }, 0);

    //creamos una funcion para que sea nuestra callback()
    // que sera llamada recursivamente, y esta dara click al boton de siguiente
    // cada 2s eso para asegurar que haga el efecto de estar avanzando solo
    const func = () => {
      this.nextButton.click();
      setTimeout(func, 2000);
    };

    //mandamos llamar la callback por primera vez
    setTimeout(func, 2000);
  }

  //esta funcion va a renderizar nuestros valores
  loadShadow(): void {
    this.items.forEach(item => {
      item.style.transform = '';
      item.style.zIndex = '';
      item.style.filter = '';
      item.style.opacity = '0';      // por defecto opaco 0
      item.style.transition = 'opacity 1s'; // añade transición suave
    });

    this.stt = 0;
    this.items[this.active].style.transform = `none`;
    this.items[this.active].style.zIndex = `1`;
    this.items[this.active].style.filter = `none`;
    this.items[this.active].style.opacity = `1`;

    for (let i = this.active + 1; i < this.items.length; i++) {
      this.stt++;
      this.items[i].style.transform = `translateX(${120 * this.stt}px) scale(${1 - 0.2 * this.stt}) perspective(16px) rotateY(-1deg)`;
      this.items[i].style.filter = `blur(5px)`;
      this.items[i].style.opacity = this.stt > 2 ? `0` : `0.6`;
    }

    this.stt = 0;
    for (let i = this.active - 1; i >= 0; i--) {
      this.stt++;
      this.items[i].style.transform = `translateX(${-120 * this.stt}px) scale(${1 - 0.2 * this.stt}) perspective(16px) rotateY(1deg)`;
      this.items[i].style.filter = `blur(5px)`;
      this.items[i].style.opacity = this.stt > 2 ? `0` : `0.6`;
    }

    console.log(this.items);
  }

  nextPressed(): void {
    this.active = this.active + 1 < this.items.length ? this.active + 1 : 0;
    this.loadShadow();
  }

  prevPressed(): void {
    this.active = this.active - 1 >= 0 ? this.active - 1 : this.items.length - 1;
    this.loadShadow();
  }
}
