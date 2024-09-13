import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-nav-catalogo',
  templateUrl: './nav-catalogo.component.html',
  styleUrls: ['./nav-catalogo.component.css'],
})
export class NavCatalogoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Asegurarse de que los elementos existen antes de operar con ellos
    const chatModal = document.getElementById(
      'uniqueChatModal'
    ) as HTMLElement | null;
    const closeButton = document.getElementById(
      'uniqueCloseButton'
    ) as HTMLElement | null;
    const searchButton = document.getElementById(
      'uniqueSearchButton'
    ) as HTMLElement | null;
    const searchInputTrigger = document.getElementById(
      'searchInputTrigger'
    ) as HTMLElement | null;
    const menuBtn = document.getElementById('menu-btn') as HTMLElement | null;
    const sidebar = document.getElementById('sidebar') as HTMLElement | null;
    const navButtons = document.getElementById(
      'nav-buttons'
    ) as HTMLElement | null;
    const overlay = document.getElementById('overlay') as HTMLElement | null;
    const desktopNav = document.getElementById(
      'desktop-nav'
    ) as HTMLElement | null;
    const menuIcon = document.getElementById('menu-icon') as HTMLElement | null;

    // Validar si los elementos están disponibles
    if (chatModal && closeButton && searchButton && searchInputTrigger) {
      // Función para cerrar el modal
      closeButton.addEventListener('click', () => {
        chatModal.classList.add('hidden');
      });

      // Función para mostrar el modal al hacer clic en el botón de búsqueda
      searchButton.addEventListener('click', (e: Event) => {
        e.preventDefault();
        chatModal.classList.remove('hidden');
      });

      // Abrir modal con otro trigger (searchInputTrigger)
      searchInputTrigger.addEventListener('click', (e: Event) => {
        e.preventDefault();
        chatModal.classList.remove('hidden');
      });
    } else {
      console.error(
        'Uno o más elementos no fueron encontrados en el DOM (modal y botones)'
      );
    }

    // Validar si los elementos para la barra de navegación están disponibles
    if (menuBtn && sidebar && navButtons && overlay && desktopNav && menuIcon) {
      function checkScreenWidth(): void {
        if (window.innerWidth >= 1024) {
          // Pantalla grande: mostrar enlaces de navegación, ocultar ícono de menú
          desktopNav?.classList.remove('hidden');
          menuIcon?.classList.add('hidden');
        } else if (window.innerWidth >= 768) {
          // Pantalla mediana (tablet): mostrar enlaces de navegación, ocultar ícono de menú
          desktopNav?.classList.remove('hidden');
          menuIcon?.classList.add('hidden');
        } else {
          // Pantalla pequeña: mostrar ícono de menú, ocultar enlaces de navegación
          desktopNav?.classList.add('hidden');
          menuIcon?.classList.remove('hidden');
        }
      }

      // Ejecutar al cargar la página
      checkScreenWidth();

      // Añadir un event listener para cambio de tamaño de ventana
      window.addEventListener('resize', checkScreenWidth);

      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        navButtons.classList.toggle('hidden');
      });

      overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        navButtons.classList.remove('hidden');
      });
    } else {
      console.error(
        'Uno o más elementos no fueron encontrados en el DOM (navegación y botones)'
      );
    }
  }
}
