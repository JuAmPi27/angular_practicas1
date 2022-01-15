import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  // aca inyectamos en el componente principal el servicio que creamos
  constructor(private miServicio:ServicioEmpleadosService) { }

  empleados:Empleado[]=[   //click izquierdo sobre el error, aparece una lamparita azul, hacer click y t lleva a la solucion

    new Empleado ("Juan", "Díaz", "Gerente", 40000),
    new Empleado ("Carlos", "Gimenez", "Supervisor", 20000),
    new Empleado ("Mariana", "Lopez", "Jefa de RRHH", 15000),
    new Empleado ("Pabo", "Lavequia", "Operario", 10000),
    new Empleado ("Marta", "Jauregui", "Encargada", 15000),

  ];   

  agregarEmpleado(){
    
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre) //utilizamos el servicio creado(servicioEmpleados)
    this.empleados.push(miEmpleado);
  
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  
}






