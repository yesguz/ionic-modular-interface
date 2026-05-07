import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: 'contacto.page.html',
  styleUrls: ['contacto.page.scss'],
  standalone: false,
})
export class ContactoPage {
  // Modelo de datos para el formulario, enlazado con ngModel
  // Esto demuestra cómo manejar entrada de datos del usuario
  contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  constructor() {}

  // Método que simula el envío del formulario
  enviarMensaje() {
    console.log('Mensaje enviado:', this.contacto);
    alert('¡Mensaje enviado correctamente! Revisa la consola para ver los datos capturados.');
    // Limpiamos el formulario después de enviar
    this.contacto = { nombre: '', email: '', mensaje: '' };
  }
}
