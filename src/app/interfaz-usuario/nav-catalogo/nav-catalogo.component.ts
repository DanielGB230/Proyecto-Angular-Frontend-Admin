import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Importa Router y RouterModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-catalogo',
  standalone: true,
  templateUrl: './nav-catalogo.component.html',
  styleUrls: ['./nav-catalogo.component.css'],
  imports: [NgFor, NgIf, FormsModule, RouterModule] // Agrega RouterModule a imports
})
export class NavCatalogoComponent {
  isChatModalVisible = false;
  isSidebarActive = false;
  isDesktopNavVisible = true; 
  isMenuIconVisible = false;  
  searchQuery = '';
  searchQuerySidebar = '';
  searchHistory: string[] = [];

  constructor(private router: Router) {}
  visibleComponent: string | null = null; 

  // Método navigateTo para manejar rutas y componentes y cerrar la barra lateral
  navigateTo(routeOrComponent: string): void {
    if (routeOrComponent.startsWith('/')) {
      // Si es una ruta, navega usando el Router
      this.router.navigate([routeOrComponent]);
    } else {
      // Si no es una ruta, cambia de componente
      this.visibleComponent = routeOrComponent;
    }
    // Cerrar la barra lateral después de seleccionar una opción
    this.isSidebarActive = false;
    document.getElementById('overlay')!.classList.remove('active');
  }

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
    document.getElementById('overlay')!.classList.toggle('active', this.isSidebarActive);
  }

  closeOverlay() {
    this.isSidebarActive = false;
    document.getElementById('overlay')!.classList.remove('active');
  }

  openChatModal() {
    this.isChatModalVisible = true;
  }

  closeChatModal() {
    this.isChatModalVisible = false;
  }

  search() {
    if (this.searchQuery) {
      this.searchHistory.push(this.searchQuery);
      console.log('Buscando:', this.searchQuery);
      this.searchQuery = '';
    }
  }

  updateDesktopNavVisibility() {
    const width = window.innerWidth;

    // Mostrar navegación de escritorio y ocultar el botón de menú en pantallas grandes
    this.isDesktopNavVisible = width >= 1024;
    this.isMenuIconVisible = width < 1024;

    if (this.isDesktopNavVisible) {
      this.isSidebarActive = false;
      document.getElementById('overlay')!.classList.remove('active');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateDesktopNavVisibility();
  }

  ngOnInit() {
    this.updateDesktopNavVisibility();
  }
}
