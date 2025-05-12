import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/components/routes/login.component';
import { ContentComponent } from './app/components/content/content.component';
import { HomeComponent } from './app/components/home/home.component';
import { ServiciosComponent } from './app/components/servicios/servicios.component';
import { NuevosComponent } from './app/components/nuevos/nuevos.component';
import { SeminuevosComponent } from './app/components/seminuevos/seminuevos.component';
import { ContactoComponent } from './app/components/contacto/contacto.component';
import { FormularioComponent } from './app/components/formulario/formulario.component';
import { AuthGuard } from './app/auth.guard';
import { HeaderComponent } from './app/components/header/header.component'; // Ajusta la ruta
import { NavbarComponent } from './app/components/navbar/navbar.component'; // Ajusta la ruta
import { FooterComponent } from './app/components/footer/footer.component'; // Ajusta la ruta
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    AuthGuard,
    { provide: Window, useValue: window },
    FormsModule, ReactiveFormsModule
  ]
}).catch(err => console.error(err));