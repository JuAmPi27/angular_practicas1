import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-personalizado',
  templateUrl: './error-personalizado.component.html',
  styleUrls: ['./error-personalizado.component.css']
})
export class ErrorPersonalizadoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  volverHome(){
    this.router.navigate([""]); //dentro de los corchetes va la ruta donde queremos que nos lleve, en este caso van las "" porque en el appComponent.html cuando creamosel enrutamiento le pusismos así
  }

}
