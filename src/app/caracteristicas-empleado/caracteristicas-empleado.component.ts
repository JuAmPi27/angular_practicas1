import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  // inyectamos el servicio que creamos porque tambien lo queremos utilizar aca...
 // constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  agregarCaracteristicas (value:string) {
   // this.miServicio.muestraMensaje(value); //utilizamos tmabien el servicio aca (serviciosEmpleados)
   // this.caracteristicasEmpleados.emit(value);

   //las lineas de constructor y las q estan dentro del método (agregarCaracteristicas) estan comentadas porque ya inyectamos ese servicio dentro de otro y no nos hacen falta aca
  }

}
