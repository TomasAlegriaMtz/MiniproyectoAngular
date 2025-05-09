import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { SeminuevosComponent } from './components/seminuevos/seminuevos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentComponent, FooterComponent, NavbarComponent, ServiciosComponent, NuevosComponent, SeminuevosComponent, ContactoComponent, FormularioComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiniproyectoAngular';
}
