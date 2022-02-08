import { Component, OnInit } from '@angular/core';
import { DatoslistaService } from '../datoslista.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  listatareas: DatoslistaService;
  tareasIntroducidas = new Array();

  constructor(tareas: DatoslistaService) {
    this.listatareas = tareas; 
    this.tareasIntroducidas = tareas.tareas 
  }

  ngOnInit(): void {
    this.listatareas.tareas = JSON.parse(localStorage['tareas']);

  }
  // INTENTO DE PONER EL TIEMPO QUE HA PASADO 
  // calculaDiferencia(index:any){
  //   let fechatarea = new Date (this.tareasIntroducidas[index].fecha)
  //   let fechaHoy = new Date().getTime() - fechatarea.getTime();
  //   return Math.round(fechaHoy/60000)
  // }

}
