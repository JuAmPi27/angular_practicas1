import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { ListaEmpleadosService } from '../lista-empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {
  

  // video 28 Routing, paso 1: agregar al constructor el ActivatedRoute.
  constructor(private router:Router, private Route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private listaEmpleados:ListaEmpleadosService) { }

  empleados:Empleado[]=[];  
  accion:number; 


  ngOnInit(): void {

    this.accion = parseInt(this.Route.snapshot.queryParams["accion"]);


    this.empleados = this.listaEmpleados.empleados;

    // paso 3: el indice de esta clase tiene que ser igual al indice que le estamos enviando desde la ruta
    this.indice = this.Route.snapshot.params ["id"];
    
    //paso 4: creo un objeto de tipo Empleado cuya info sea la correspondiente al que tenga ese id del paso 3
    //el metodo encontrarEmpleado() lo creamos en el servicio listaEmpleados
    let empleado:Empleado = this.listaEmpleados.encontrarEmpleado(this.indice);

    //paso 6: cargar en el cuadro del empleado cada item del empleado (nombre, apellido, cargo y salario)
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  
  }

  volverHome(){
    this.router.navigate([""]); //dentro de los corchetes va la ruta donde queremos que nos lleve, en este caso van las "" porque en el appComponent.html cuando creamosel enrutamiento le pusismos así
  }

  /*
  //paso 7: crear una funcion para que actualice el empleado
  actualizaEmpleado(){
    
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre) //utilizamos el servicio creado(servicioEmpleados)
    this.listaEmpleados.actualizarEmpleado(this.indice, miEmpleado);
  
    this.router.navigate([""]); //redireccionamiento automático luego de realizar cualquier acción, en este caso cuando le damos al btn actualizar nos lleva al inicio.
  }

  eliminaEmpleado(){
    this.listaEmpleados.eliminarEmpleado(this.indice);
    this.router.navigate([""]);
  }
*/

actualizaEmpleado(){

  if(this.accion==1) {
  let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  this.listaEmpleados.actualizarEmpleado(this.indice, miEmpleado);
  this.router.navigate([""]); 
  } else{
  this.listaEmpleados.eliminarEmpleado(this.indice);
  this.router.navigate([""]);
  }

}
  

cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  //paso 2: crear una variable para almacenar el indice que viene por url
  indice:number;

}
