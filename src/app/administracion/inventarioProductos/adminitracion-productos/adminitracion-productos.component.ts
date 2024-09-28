import { Component,HostListener,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-adminitracion-productos',
  templateUrl: './adminitracion-productos.component.html',
  styleUrls: ['./adminitracion-productos.component.css']
})

export class AdminitracionProductosComponent implements OnInit {
  sidebarVisible: boolean = false;
  overlayVisible: boolean = false;
  allChecked: boolean = false;
  checkboxes: NodeListOf<HTMLInputElement> | undefined;

  ngOnInit(): void {
    // Modal de chat
    const chatModal = document.getElementById("uniqueChatModal") as HTMLElement;
    const closeButton = document.getElementById("uniqueCloseButton") as HTMLElement;
    const searchButton = document.getElementById("uniqueSearchButton") as HTMLElement;
    const cancelButton = document.getElementById("cancelButton") as HTMLElement;

    if (closeButton) {
      closeButton.addEventListener("click", () => {
        this.closeModal(chatModal);
      });
    }

    if (searchButton) {
      searchButton.addEventListener("click", (e: Event) => {
        e.preventDefault();
        this.openModal(chatModal);
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener("click", () => {
        this.closeModal(chatModal);
      });
    }

    // Modal de edición
    const modalEdit = document.getElementById("modalEdit") as HTMLElement;
    const btnCloseEdit = document.getElementById("btnCloseEdit") as HTMLElement;
    const btnCancelEdit = document.getElementById("btnCancelEdit") as HTMLElement;
    const btnSaveEdit = document.getElementById("btnSaveEdit") as HTMLElement;

    if (btnCloseEdit) {
      btnCloseEdit.addEventListener("click", () => {
        this.closeModal(modalEdit);
      });
    }

    document.querySelectorAll('.btnOpenModal').forEach(button => {
      button.addEventListener('click', (e: Event) => {
        e.preventDefault();
        this.openModal(modalEdit);
      });
    });

    if (btnCancelEdit) {
      btnCancelEdit.addEventListener("click", () => {
        this.closeModal(modalEdit);
      });
    }

    if (btnSaveEdit) {
      btnSaveEdit.addEventListener("click", () => {
        console.log('Cambios guardados');
        this.closeModal(modalEdit);
      });
    }
  }

  // Función para cerrar modales
  closeModal(modal: HTMLElement) {
    modal.classList.add("hidden");
  }

  // Función para abrir modales
  openModal(modal: HTMLElement) {
    modal.classList.remove("hidden");
  }
  

  // Maneja el clic en el botón del menú
  toggleSidebar() {
    this.sidebarVisible = true;
    this.overlayVisible = true;

    if (window.innerWidth < 768) {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.style.overflowY = 'auto';
        sidebar.style.overflowX = 'auto';
      }
    }
  }

  // Maneja el clic en el botón de cerrar
  closeSidebar() {
    this.sidebarVisible = false;
    this.overlayVisible = false;
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.style.overflowY = '';
      sidebar.style.overflowX = '';
    }
  }

  // Maneja el clic en el overlay
  closeOverlay() {
    this.closeSidebar();
  }

  // Maneja el cambio de tamaño de la ventana
  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 768) {
      this.closeSidebar();
    } else {
      const sidebar = document.getElementById('sidebar');
      if (sidebar) {
        sidebar.style.overflowY = 'auto';
        sidebar.style.overflowX = 'auto';
      }
    }
  }

  // Maneja el checkbox de seleccionar todos
  toggleSelectAll() {
    if (this.checkboxes) {
      this.checkboxes.forEach((checkbox) => {
        checkbox.checked = this.allChecked;
        this.updateCheckboxStyle(checkbox);
      });
    }
    this.updateButtonColor();
  }

  // Maneja el cambio individual de cada checkbox
  toggleCheckbox(checkbox: HTMLInputElement) {
    this.updateCheckboxStyle(checkbox);

    if (this.checkboxes) {
      const allChecked = Array.from(this.checkboxes).every(cb => cb.checked);
      this.allChecked = allChecked;
    }

    this.updateButtonColor();
  }

  // Actualiza el estilo de cada checkbox
  private updateCheckboxStyle(checkbox: HTMLInputElement) {
    const box = checkbox.nextElementSibling?.querySelector('div');
    const svg = box?.querySelector('svg');
    if (checkbox.checked) {
      box?.classList.replace('bg-white', 'bg-blue-500');
      svg?.classList.remove('hidden');
    } else {
      box?.classList.replace('bg-blue-500', 'bg-white');
      svg?.classList.add('hidden');
    }
  }

  // Cambia el color del botón de acción según los checkboxes seleccionados
  private updateButtonColor() {
    const actionButton = document.getElementById('actionButton');
    if (this.checkboxes && Array.from(this.checkboxes).some(cb => cb.checked)) {
      actionButton?.classList.remove('bg-gray-400');
      actionButton?.classList.add('bg-red-500');
    } else {
      actionButton?.classList.remove('bg-red-500');
      actionButton?.classList.add('bg-gray-400');
    }
  }
}
