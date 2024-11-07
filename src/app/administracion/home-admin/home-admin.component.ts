import { CommonModule, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../gestion-ventas/dashboard/dashboard.component";
import { InicioComponent } from "../gestion-ventas/inicio/inicio.component";
import { VentasComponent } from "../gestion-ventas/ventas/ventas.component";
import { VenderProductosComponent } from "../gestion-productos/vender-productos/vender-productos.component";
import { ListaProductosComponent } from "../gestion-productos/lista-productos/lista-productos.component";
import { CategoriasComponent } from "../gestion-productos/categorias/categorias.component";
import { MarcasComponent } from "../gestion-productos/marcas/marcas.component";
import { EmpleadosComponent } from "../gestion-usuarios/empleados/empleados.component";
import { UsuariosComponent } from "../gestion-usuarios/usuarios/usuarios.component";
import { PuestosComponent } from "../gestion-usuarios/puestos/puestos.component";
import { RolesComponent } from "../gestion-usuarios/roles/roles.component";
import { ServicioTecnicoComponent } from "../relaciones-proveedores/servicio-tecnico/servicio-tecnico.component";
import { ClientesComponent } from "../gestion-usuarios/clientes/clientes.component";

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [NgIf, RouterOutlet, CommonModule, InicioComponent, DashboardComponent, VentasComponent, VenderProductosComponent, ListaProductosComponent, CategoriasComponent, MarcasComponent, EmpleadosComponent, UsuariosComponent, PuestosComponent, RolesComponent, ServicioTecnicoComponent, ClientesComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {
  /* De aca asia avajo es todo lo de barra lateral */
  menuOption: string = ''; // Inicializa con un valor vacío
  sidebar!: HTMLElement | null;
  menuBtn!: HTMLElement | null;
  closeBtn!: HTMLElement | null;
  overlay!: HTMLElement | null;

  onOption(option: string) {
    this.menuOption = option; // Actualiza la opción seleccionada
  }

  title = 'Innova';

  ngOnInit(): void {
    this.sidebar = document.getElementById("sidebar");
    this.menuBtn = document.getElementById("menu-btn");
    this.closeBtn = document.getElementById("close-btn");
    this.overlay = document.getElementById("overlay");

    // Inicializa los eventos de la barra lateral
    this.initializeEventListeners();
  }

  // initializeEventListeners: Asigna eventos a los botones de la barra lateral.
  initializeEventListeners(): void {
    if (this.menuBtn) {
      this.menuBtn.addEventListener("click", this.openSidebar.bind(this));
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", this.closeSidebar.bind(this));
    }

    if (this.overlay) {
      this.overlay.addEventListener("click", this.closeSidebar.bind(this));
    }
  }

  // openSidebar: Abre la barra lateral y muestra el overlay.
  openSidebar(): void {
    if (this.sidebar && this.overlay) {
      this.sidebar.classList.add("show");
      this.overlay.style.display = "block";

      if (window.innerWidth < 768) {
        this.sidebar.style.overflowY = "auto";
        this.sidebar.style.overflowX = "auto";
      }
    }
  }

  // closeSidebar: Cierra la barra lateral y oculta el overlay.
  closeSidebar(): void {
    if (this.sidebar && this.overlay) {
      this.sidebar.classList.remove("show");
      this.overlay.style.display = "none";
      this.sidebar.style.overflowY = "";
      this.sidebar.style.overflowX = "";
    }
  }

  // onResize: Detecta el redimensionamiento de la ventana para ajustar la barra lateral.
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.sidebar && this.overlay) {
      if (window.innerWidth >= 768) {
        this.sidebar.classList.remove("show");
        this.overlay.style.display = "none";
        this.sidebar.style.overflowY = "";
        this.sidebar.style.overflowX = "";
      } else {
        this.sidebar.style.overflowY = "auto";
        this.sidebar.style.overflowX = "auto";
      }
    }
  }

  /* Esto es para que el hover: se quede quieto cuando se presione un botton */
  activeButton: string = '';

  setActive(buttonId: string) {
    this.activeButton = buttonId;
  }

  isActive(buttonId: string): boolean {
    return this.activeButton === buttonId;
  }

  constructor(private router: Router) { }
  // Componente visible por defecto
  visibleComponent: string | null = 'app-inicio';
  // Método navigateTo unificado para manejar tanto rutas como componentes
  navigateTo(routeOrComponent: string): void {
    if (routeOrComponent.startsWith('/')) {
      // Si es una ruta, navega usando el Router y resetea el componente visible
      this.router.navigate([routeOrComponent]).then(() => {
        this.visibleComponent = null; // Cierra el componente actual
      });
    } else {
      // Si no es una ruta, cambia de componente
      this.visibleComponent = routeOrComponent;
    }
  }

}