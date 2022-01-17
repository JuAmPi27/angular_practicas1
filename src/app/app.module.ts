import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ListaEmpleadosService } from './lista-empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';


// ROUTING 
const appRoutes:Routes = [
// como es un array de objetos, lo que hacemos acá e crear un objeto para cada ruta
{path:"", component:HomeComponent},
{path:"proyectos", component:ProyectosComponent},
{path:"quienesSomos", component:QuienesSomosComponent},
{path:"contactos", component:ContactosComponent},
{path:"actualiza/:id", component:ActualizaComponent}, 


];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesSomosComponent,
    ContactosComponent,
    ActualizaComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //importante agregarlo para que funcionen las rutas
    //con el forRoot(appRoutes) le digo que quiero utilizar esa contstante (appRoutes) en mi aplicacion para enrutar todos los componentes que tenemos confeccionados......
  ],
  providers: [ServicioEmpleadosService, ListaEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
