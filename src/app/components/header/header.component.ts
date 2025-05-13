import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  currentImage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Escucha los cambios de ruta y actualiza la imagen
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateImageBasedOnRoute(event.urlAfterRedirects);
    });

    // Establece la imagen inicial basada en la ruta actual
    this.updateImageBasedOnRoute(this.router.url);
  }

  private updateImageBasedOnRoute(url: string): void {
    // Mapeo de rutas a imágenes
    const imageMap: { [key: string]: string } = {
      '/': 'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/pnr/2022/Products/911-GT3-RS-Nurburgring/gallery/221005_HM_160704B_highres.jpeg/jcr:content/221005_HM_160704B_highres.jpeg',
      '/servicios': 'https://images.stockcake.com/public/8/3/c/83c0fcc1-66f5-4c1b-9f7a-8e2060affc12_large/mechanic-with-car-stockcake.jpg',
      '/nuevos': 'https://pyxis.nymag.com/v1/imgs/df3/2f4/964355023c8621887c37e1fcc3c1dc3aa9-koeniggsegg-one1.2x.h473.w710.jpg',
      '/seminuevos': 'https://cdn.motor1.com/images/mgl/xEyvz/s1/2016-dodge-viper-acr.webp',
      '/contacto': 'https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F06%2F26141455%2Flance-stroll-fernando-alonso-aston-martin-planet-f1-2023.jpg',
      '/formulario': 'https://www.imsa.com/wp-content/uploads/sites/32/2021/12/08/1_IWSC_BigPicture_820x436.jpg',
      '/login': 'https://via.placeholder.com/1200x800?text=Login'
    };

    // Asignar la imagen según la ruta actual
    this.currentImage = imageMap[url] || 'https://via.placeholder.com/1200x800?text=Default';
  }
}