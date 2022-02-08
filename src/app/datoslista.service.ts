import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatoslistaService {
  tareas = new Array();
  constructor() { }
  agregarNota(tareaEnviada:any) {
    this["tareas"].push(tareaEnviada);
    this.ordenarPrioridad();
  };
  completar(index:any) {
    this["tareas"][index].hecho = !this["tareas"][index].hecho;
    localStorage["tareas"] = JSON.stringify(this["tareas"]);
  };
  aumentarPrioridad(index:any) {
    if (this["tareas"][index].prioridad > 1) {
      this["tareas"][index].prioridad--;
      this.ordenarPrioridad();

      localStorage["tareas"] = JSON.stringify(this["tareas"]);
    }
  };
  disminuirPrioridad(index:any) {
    if (this["tareas"][index].prioridad < 3) {
      this["tareas"][index].prioridad++;
      this.ordenarPrioridad();
      localStorage["tareas"] = JSON.stringify(this["tareas"]);
    }
  };
  borrar(index:any) {
    this["tareas"].splice(index, 1);
    localStorage["tareas"] = JSON.stringify(this["tareas"]);
  };
  borrarCompletadas() {
    this["tareas"] = JSON.parse(localStorage["tareas"]);
    let completadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (!tarea.hecho) {
        completadas.push(tarea);
      }
    });
    this["tareas"] = completadas;
    localStorage["tareas"] = JSON.stringify(this["tareas"]); 
  };

  borrarTodas() {
    this["tareas"] = JSON.parse(localStorage["tareas"]);
    this["tareas"] = [];
    localStorage["tareas"] = JSON.stringify(this["tareas"]); 
  };

  mostrarCompletadas() {
    this["tareas"] = JSON.parse(localStorage["tareas"]);
    let completadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (tarea.hecho) {
        completadas.push(tarea);
      }
      this["tareas"] = completadas;
    });
  };
  mostrarNoCompletadas() {
    this["tareas"] = JSON.parse(localStorage["tareas"]);
    let noCompletadas = new Array();
    this["tareas"].forEach((tarea) => {
      if (!tarea.hecho) {
        noCompletadas.push(tarea);
      }
      this["tareas"] = noCompletadas;
    });
  };
  mostrarTodas() {
    this["tareas"] = JSON.parse(localStorage["tareas"]);
  };
  
  ordenarPrioridad() {
    this["tareas"] = this["tareas"].sort((a, b) => {
      if (a.prioridad < b.prioridad) {
        return -1;
      } else if (a.prioridad > b.prioridad) {
        return 1;
      } else {
        return 0;
      }
    });

    localStorage["tareas"] = JSON.stringify(this["tareas"]);
  };
  finalizadas() {
    let finalizadas = this.tareas.filter((tarea) => !tarea.hecho).length;
    return finalizadas;
  };
}

