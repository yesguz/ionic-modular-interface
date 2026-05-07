import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: 'informacion.page.html',
  styleUrls: ['informacion.page.scss'],
  standalone: false,
})
export class InformacionPage {
  // Como estudiante, defino un objeto con mis datos personales
  // Esto es una buena práctica para mantener el HTML limpio y manejar los datos en TypeScript
  estudiante = {
    nombre: 'Desarrollador Estudiante',
    carrera: 'Ingeniería de Sistemas / Informática',
    semestre: '8vo Semestre',
    habilidades: ['HTML/CSS', 'JavaScript', 'Angular', 'Ionic Framework']
  };

  constructor() {}
}
