import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ListaEmpleadosService } from '../lista-empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  titulo = 'Listado de Empleados';

  // aca inyectamos en el componente principal el servicio que creamos y le agregamos el segundo que es un data service
  constructor(private miServicio:ServicioEmpleadosService, private listaEmpleados:ListaEmpleadosService) { 
    
    this.empleados = this.listaEmpleados.empleados;
  
  }

  ngOnInit(): void {
  }

  empleados:Empleado[]=[];  

  agregarEmpleado(){
    
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre) //utilizamos el servicio creado(servicioEmpleados)
    this.listaEmpleados.agregarEmpleadoServicio(miEmpleado);
  //ya no necesitamos esta linea de código (26) porque ya inyectamos ese servivio dentro de otro para que haga esa llamada.
  }

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

}
