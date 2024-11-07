import { Component } from '@angular/core';
import { NgIf } from '@angular/common';  
import { NavCatalogoComponent } from '../nav-catalogo/nav-catalogo.component';
import { EditarPerfilComponent } from "../editar-perfil/editar-perfil.component";
import { SupportComponent } from "../support/support.component";
import { DetalleSupportComponent } from "../detalle-support/detalle-support.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [NgIf, NavCatalogoComponent, EditarPerfilComponent, DetalleSupportComponent],
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {

  isSidebarActive: boolean = false; 

  
  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive; 
  }
  
  closeSidebar() {
    this.isSidebarActive = false;
  }
  
  constructor(private router: Router) {}  // Inyectar Router para navegar entre rutas
  visibleComponent: string | null = 'app-editar-perfil'; // Componente visible por defecto
  // Método navigateTo unificado para manejar tanto rutas como componentes
  navigateTo(routeOrComponent: string): void {
    if (routeOrComponent.startsWith('/')) {
      // Si es una ruta (comienza con '/'), navega usando el Router
      this.router.navigate([routeOrComponent]);
    } else {
      // Si no es una ruta, cambia de componente
      this.visibleComponent = routeOrComponent;
      this.isSidebarActive = false; // Cierra el sidebar al cambiar de componente
    }
  }
}

    /* Para navegar entre app-****/
/*     visibleComponent: string | null = null; */
// Variable para controlar el componente que se debe mostrar
/*   navigateTo(component: string): void {
    this.visibleComponent = component;
  } */

