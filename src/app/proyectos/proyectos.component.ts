import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ListaEmpleadosService } from '../lista-empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private listaEmpleados:ListaEmpleadosService) { 
    this.empleados = this.listaEmpleados.empleados;
  }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([""]); //dentro de los corchetes va la ruta donde queremos que nos lleve, en este caso van las "" porque en el appComponent.html cuando creamosel enrutamiento le pusismos así
  }

  empleados:Empleado[]=[];  

  agregarEmpleado(){
    
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre) //utilizamos el servicio creado(servicioEmpleados)
    this.listaEmpleados.agregarEmpleadoServicio(miEmpleado);
  //ya no necesitamos esta linea de código (26) porque ya inyectamos ese servivio dentro de otro para que haga esa llamada.
    this.router.navigate([""]); //redireccionamiento automático luego de realizar cualquier acción, en este caso cuando le damos al btn agregar nos lleva al inicio.
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

}
