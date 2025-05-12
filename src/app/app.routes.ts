import { Routes } from '@angular/router';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { SeminuevosComponent } from './components/seminuevos/seminuevos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContentComponent } from './components/content/content.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/routes/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
 // Ruta para el login
  
  { 
    path: '', 
    component: ContentComponent,  // Componente principal con layout
      // Se protege la ruta para verificar que esté logueado
    children: [
      { path: '', component: HomeComponent }, // Página de inicio dentro de ContentComponent
      { path: 'servicios', component: ServiciosComponent },
      { path: 'nuevos', component: NuevosComponent },
      { path: 'seminuevos', component: SeminuevosComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'formulario', component: FormularioComponent },
       { path: 'login', component: LoginComponent }  
      
    ]
  },

  { path: '**', redirectTo: '/login' }  // Redirige a login para rutas no encontradas
];
