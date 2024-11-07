import { Component } from '@angular/core';
import { Location } from '@angular/common'; // Importamos Location para manipular el historial del navegador

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  constructor(private location: Location) { } // Inyectamos el servicio Location

  // Método para regresar una página en el historial
  goBack(): void {
    this.location.back(); // Retrocede en el historial de navegación
  }
}
