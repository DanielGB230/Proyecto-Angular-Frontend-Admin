import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-productos',
  templateUrl: './create-productos.component.html',
  styleUrls: ['./create-productos.component.css']
})
export class CreateProductosComponent implements OnInit {
  sidebarVisible: boolean = false;
  overlayVisible: boolean = false;
  allChecked: boolean = false;
  checkboxes: NodeListOf<HTMLInputElement> | undefined;

  ngOnInit() {
    this.checkboxes = document.querySelectorAll('.checkbox') as NodeListOf<HTMLInputElement>;
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
