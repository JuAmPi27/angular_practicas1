import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class ListaEmpleadosService {

  constructor(private servicioVentana:ServicioEmpleadosService) { }

  // aca esta el array con los datos que en un futuro quiere q sean inyectados hacia los demas componentesq lo soliciten
empleados:Empleado[]=[   //click izquierdo sobre el error, aparece una lamparita azul, hacer click y t lleva a la posible solucion

  new Empleado ("Juan", "Díaz", "Gerente", 40000),
  new Empleado ("Carlos", "Gimenez", "Supervisor", 20000),
  new Empleado ("Mariana", "Lopez", "Jefa de RRHH", 15000),
  new Empleado ("Pabo", "Lavequia", "Operario", 10000),
  new Empleado ("Marta", "Jauregui", "Encargada", 15000),

]; 

agregarEmpleadoServicio(empleado:Empleado){
  this.servicioVentana.muestraMensaje("Persona que se agrega:" + " " + empleado.nombre + "/ " + "Salario:" + empleado.salario)
  this.empleados.push(empleado);
}


 
}
