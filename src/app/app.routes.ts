import { Routes } from '@angular/router';
import { NuevosComponent } from './components/nuevos/nuevos.component';
import { SeminuevosComponent } from './components/seminuevos/seminuevos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContentComponent } from './components/content/content.component';


export const routes: Routes = [
    {path: '', redirectTo:'/content', pathMatch: 'full'},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'nuevos', component:NuevosComponent},
    {path: 'seminuevos', component:SeminuevosComponent},
    {path: 'contacto', component:ContactoComponent},
    {path: 'content', component:ContentComponent}


];
