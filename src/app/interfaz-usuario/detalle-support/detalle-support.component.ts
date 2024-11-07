import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Asegúrate de importar Router
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-detalle-support',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './detalle-support.component.html',
  styleUrls: ['./detalle-support.component.css']
})
export class DetalleSupportComponent {
  
  constructor(private router: Router) {}  
  navigateTo(route: string): void {
    this.router.navigate([route]);  
  }
}
