import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-perfil.component.html',
})
export class EditarPerfilComponent {
  showEditModal = false;

  updateProfile() {
    console.log('Datos actualizados:');
    this.closeModal();
  }

  closeModal() {
    this.showEditModal = false;
    document.body.classList.remove('overflow-hidden');
  }

  openModal() {
    this.showEditModal = true;
    document.body.classList.add('overflow-hidden');
  }
}
