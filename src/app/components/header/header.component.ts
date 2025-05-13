import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Imagen por defecto si no hay match
  defaultImage = 'https://via.placeholder.com/1200x800?text=Default';

  // Mapeo de rutas a URL de imagen
  imageMap: Record<string, string> = {
    '/':             'https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/teaser_720x406x2/dam/pnr/2022/Products/911-GT3-RS-Nurburgring/gallery/221005_HM_160704B_highres.jpeg/jcr:content/221005_HM_160704B_highres.jpeg',
    '/servicios':    'https://images.stockcake.com/public/8/3/c/83c0fcc1-66f5-4c1b-9f7a-8e2060affc12_large/mechanic-with-car-stockcake.jpg',
    '/nuevos':       'https://pyxis.nymag.com/v1/imgs/df3/2f4/964355023c8621887c37e1fcc3c1dc3aa9-koeniggsegg-one1.2x.h473.w710.jpg',
    '/seminuevos':   'https://cdn.motor1.com/images/mgl/xEyvz/s1/2016-dodge-viper-acr.webp',
    '/contacto':     'https://images.ps-aws.com/c?url=https%3A%2F%2Fd3cm515ijfiu6w.cloudfront.net%2Fwp-content%2Fuploads%2F2023%2F06%2F26141455%2Flance-stroll-fernando-alonso-aston-martin-planet-f1-2023.jpg',
    '/formulario':   'https://www.imsa.com/wp-content/uploads/sites/32/2021/12/08/1_IWSC_BigPicture_820x436.jpg',
    '/login':        'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/fastlane/motorsport/2024/wallpaper-motorsport/bmw-m-wallpaper-bmw-hybrid-v8-side-4k.jpg',
    '/carComponent': 'https://pyxis.nymag.com/v1/imgs/df3/2f4/964355023c8621887c37e1fcc3c1dc3aa9-koeniggsegg-one1.2x.h473.w710.jpg',
    '/datos-admin' : 'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/fastlane/motorsport/2024/wallpaper-motorsport/bmw-m-wallpaper-bmw-hybrid-v8-side-4k.jpg'
  };

  // Rutas en las que no queramos mostrar los botones
  hideButtonsRoutes: string[] = ['/nuevos', '/login', '/seminuevos', '/contacto'];

  currentImage = '';
  showButtons  = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Escucha cambios de ruta y actualiza imagen
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
      .subscribe((evt: NavigationEnd) => {
        this.updateImageBasedOnRoute(evt.urlAfterRedirects);
      });

    // Imagen inicial
    this.updateImageBasedOnRoute(this.router.url);
  }

  /**  
   * De '/carComponent/123/true?foo=bar' → '/carComponent'
   */
  private getBaseRoute(url: string): string {
    const path = url.split('?')[0];
    const segs = path.split('/').filter(Boolean);
    return segs.length ? `/${segs[0]}` : '/';
  }

  private updateImageBasedOnRoute(url: string): void {
    const base = this.getBaseRoute(url);

    // Mostrar/ocultar botones
    this.showButtons = !this.hideButtonsRoutes.includes(base);

    // Usa la imagen del mapa o la por defecto
    this.currentImage = this.imageMap[base] ?? this.defaultImage;
  }
}