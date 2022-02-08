import { Component, OnInit } from '@angular/core';
import { DatoslistaService } from '../datoslista.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  busqueda = "";
  nombre = "";
  prioridad = "";
  tareas: DatoslistaService;
  tareasIntroducidas = new Array();
  tareasFiltradas = new Array();
  

  constructor(tareas: DatoslistaService) {
    this.tareas = tareas; 
    this.tareasIntroducidas = tareas.tareas; 
    this.tareasFiltradas = tareas.tareas
  }

  ngOnInit(): void {
    if(localStorage["tareas"]){
      this.tareasIntroducidas = JSON.parse(localStorage["tareas"])
    }
    this.tareasFiltradas = this.tareasIntroducidas
  }

  agregarTarea() {

    if (this.nombre && this.prioridad) {
      let nota = {
        nombre: this.nombre,
        prioridad: this.prioridad,
        fecha: new Date().toLocaleString(),
        hecho: false,
      };
      this.tareas.agregarNota(nota); 

      this.nombre = "";

    }
  }

  // INTENTO DE PONER EL TIEMPO QUE HA PASADO
  // calculaDiferencia(index:any){
  //   let fechatarea = new Date (this.tareasIntroducidas[index].fecha)
  //   let fechaHoy = new Date().getTime() - fechatarea.getTime();
  //   return Math.round(fechaHoy/60000)
  // }


  // INTENTO DE PONER BUSCADOR
  // buscar() {
  //   this.tareasFiltradas = this.tareasIntroducidas.filter(tarea => tarea.nombre.includes(this.busqueda))
  //   }

  



}
