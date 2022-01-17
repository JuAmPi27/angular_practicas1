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
  route: any;

  constructor(private router:Router, private Router:ActivatedRoute, private miServicio:ServicioEmpleadosService, private listaEmpleados:ListaEmpleadosService) { 
    this.empleados = this.listaEmpleados.empleados;

  }

  ngOnInit(): void {

    this.indice = this.route.snapshot.params ["id"];
    let empleado:Empleado = this.listaEmpleados.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  
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

  indice:number;

}
