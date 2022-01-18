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

//paso 5: crear el metodo encargado de encontrar al empleado
encontrarEmpleado(indice:number) {
  let empleado:Empleado = this.empleados[indice];
  return empleado;
}

//paso 8: crear el metodo para llamarlo en la funcion actualizaEmpleado.
actualizarEmpleado(indice:number, empleado:Empleado){
  //almaceno en empleadoModificado la informacion que hay en this.empleados[indice]
  let empleadoModificado = this.empleados[indice];

  // el nombre que le estamos pasando a este metodo por parametro en la llamada tiene q almacenarse en empleadoModificado.nombre en ese empleado que tenia esa posicion(this.empleados[indice])...estamos sobreescribiendo..... y asi con los otros campos.
  empleadoModificado.nombre = empleado.nombre;
  empleadoModificado.apellido = empleado.apellido;
  empleadoModificado.cargo = empleado.cargo;
  empleadoModificado.salario = empleado.salario;

}

 
}
