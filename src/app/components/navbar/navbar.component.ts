import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';
import { NuevosComponent } from '../nuevos/nuevos.component';
import { SeminuevosComponent } from '../seminuevos/seminuevos.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-navbar',
  imports: [ServiciosComponent, NuevosComponent, SeminuevosComponent, ContactoComponent, RouterModule, ContentComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
