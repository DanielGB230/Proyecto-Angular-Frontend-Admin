import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true,
    imports: [NgFor, NgClass]
})

export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  sidebar!: HTMLElement | null;
  menuBtn!: HTMLElement | null;
  closeBtn!: HTMLElement | null;
  overlay!: HTMLElement | null;

  ngOnInit(): void {
    this.sidebar = document.getElementById("sidebar");
    this.menuBtn = document.getElementById("menu-btn");
    this.closeBtn = document.getElementById("close-btn");
    this.overlay = document.getElementById("overlay");

    this.initializeEventListeners();
  }

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

  closeSidebar(): void {
    if (this.sidebar && this.overlay) {
      this.sidebar.classList.remove("show");
      this.overlay.style.display = "none";
      this.sidebar.style.overflowY = "";
      this.sidebar.style.overflowX = "";
    }
  }

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

  contacts = [
    { name: 'Xuxue Feng', email: 'feng@ultima.org', image: 'assets/images/fluent--person-square-32-regular.png', department: 'Contabilidad', labelClass: 'bg-blue-500' },
    { name: 'Elwin Sharvill', email: 'sharvill@ultima.org', image: 'assets/images/fluent--person-square-32-regular.png', department: 'Marketing', labelClass: 'bg-yellow-500' },
    { name: 'Anna Fali', email: 'fali@ultima.org', image: 'assets/images/fluent--person-square-32-regular.png', department: 'Ventas', labelClass: 'bg-pink-500' },
    { name: 'Jon Stone', email: 'stone@ultima.org', image: 'assets/images/fluent--person-square-32-regular.png', department: 'Gestión', labelClass: 'bg-green-500' },
    // Más contactos
  ];

  timelineEvents = [
    { title: 'Ordenando', time: '15/10/2024 14:30', description: 'Richard Jones (C8012) ha pedido un teclado gamer por 200 soles.' },
    { title: 'Procesando', time: '15/10/2024 16:10', description: 'El pedido #99207 se procesó correctamente.' },
    { title: 'Enviando', time: '15/10/2024 18:30', description: 'El pedido #99207 se envió con el código de envío 2222302090.' },
    { title: 'Entregado', time: '15/10/2024 10:30', description: 'Richard Jones (C8012) ha recibido su teclado gamer.' },
    // Más eventos
  ];

  bestsellers = [
    { name: 'Producto A', description: 'Descripción breve' },
    { name: 'Producto A', description: 'Descripción breve' },
    { name: 'Producto A', description: 'Descripción breve' },
    // Más bestsellers
  ];
}
