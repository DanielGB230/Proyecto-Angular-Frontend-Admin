import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

@Component({
    selector: 'app-vender-productos',
    templateUrl: './vender-productos.component.html',
    styleUrls: ['./vender-productos.component.css'],
    standalone: true,
    imports: [NgIf, NgClass, FormsModule]
})
export class VenderProductosComponent implements OnInit {

  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
  // Propiedades: Definimos las propiedades necesarias para interactuar con los elementos HTML.
  // Propiedades de la barra lateral (sidebar)
  sidebar!: HTMLElement | null;
  menuBtn!: HTMLElement | null;
  closeBtn!: HTMLElement | null;
  overlay!: HTMLElement | null;

  // Propiedades del modal de edición
  modalEdit!: HTMLElement | null;
  btnCloseEdit!: HTMLElement | null;
  btnCancelEdit!: HTMLElement | null;
  btnSaveEdit!: HTMLElement | null;

  // ngOnInit: Inicializa los elementos del DOM al cargar el componente.
  ngOnInit(): void {
    this.sidebar = document.getElementById("sidebar");
    this.menuBtn = document.getElementById("menu-btn");
    this.closeBtn = document.getElementById("close-btn");
    this.overlay = document.getElementById("overlay");

    this.modalEdit = document.getElementById("modalEdit");
    this.btnCloseEdit = document.getElementById("btnCloseEdit");
    this.btnCancelEdit = document.getElementById("btnCancelEdit");
    this.btnSaveEdit = document.getElementById("btnSaveEdit");

    // Inicializa los eventos de la barra lateral y del modal de edición
    this.initializeEventListeners();

    // Inicializa los eventos del modal de confirmación
    this.initializeConfirmButtons();
  }

  // initializeEventListeners: Asigna eventos a los botones de la barra lateral y el modal de edición.
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

    if (this.modalEdit && this.btnCloseEdit && this.btnCancelEdit && this.btnSaveEdit) {
      // Asigna eventos a los botones del modal de edición
      this.btnCloseEdit.addEventListener("click", this.openConfirmClearModal.bind(this));
      document.querySelectorAll('.btnOpenModal').forEach(button => {
        button.addEventListener('click', this.openModalEdit.bind(this));
      });

      // Asigna evento al botón de cancelar para abrir el modal de confirmación
      this.btnCancelEdit.addEventListener("click", this.openConfirmClearModal.bind(this));

      // Asigna evento al botón de guardar para validar y cerrar el modal de edición
      this.btnSaveEdit.addEventListener("click", this.saveModalEdit.bind(this));
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

  // openModalEdit: Abre el modal de edición para modificar los productos.
  openModalEdit(event: Event): void {
    event.preventDefault();
    if (this.modalEdit) {
      this.modalEdit.classList.remove("hidden");
    }
  }

  // closeModalEdit: Cierra el modal de edición.
  closeModalEdit(): void {
    if (this.modalEdit) {
      this.modalEdit.classList.add("hidden");
    }
  }

  // saveModalEdit: Valida y guarda los cambios hechos en el modal de edición.
  saveModalEdit(): void {
    const form = document.querySelector('form') as HTMLFormElement;

    if (form.checkValidity()) {
      console.log('Formulario válido, guardando cambios...');
      if (this.modalEdit) {
        this.modalEdit.classList.add("hidden");
      }
    } else {
      form.reportValidity();
      console.log('Formulario inválido, por favor complete todos los campos requeridos.');
    }
  }

  // openConfirmClearModal: Muestra el modal de confirmación para deshacer cambios.
  openConfirmClearModal(): void {
    const confirmClearModal = document.getElementById("confirm-clear-modal");
    if (confirmClearModal) {
      confirmClearModal.classList.remove("hidden"); // Muestra el modal de confirmación
    }
  }

  // closeConfirmClearModal: Oculta el modal de confirmación.
  closeConfirmClearModal(): void {
    const confirmClearModal = document.getElementById("confirm-clear-modal");
    if (confirmClearModal) {
      confirmClearModal.classList.add("hidden"); // Oculta el modal
    }
  }
  // confirmClear: Confirma el reseteo del formulario, limpia los campos y cierra los modales.
  confirmClear(): void {
    const form = document.querySelector('form') as HTMLFormElement;

    if (form) {
      form.reset(); // Limpia todos los campos del formulario
    }

    // Cierra el modal de confirmación
    this.closeConfirmClearModal();

    // Cierra el modal de edición si está abierto
    if (this.modalEdit) {
      this.modalEdit.classList.add("hidden");
    }

    console.log('Cambios desechados y formulario cerrado.');
  }


  /* ********************************+********************************** */
  initializeConfirmButtons(): void {
    const btnOpenModal = document.getElementById("btn-open-cart") as HTMLButtonElement;
    const btnOpenEdit = document.getElementById("btnOpenEdit") as HTMLButtonElement; // Botón para registrar la venta
    const modalBackground = document.getElementById("cart-shop-modal") as HTMLElement;

    // Agregar evento para abrir el modal del carrito
    if (btnOpenModal) {
      btnOpenModal.addEventListener("click", () => this.showCartConfirmationModal());
    }

    // Agregar evento para abrir el modal de registrar venta
    if (btnOpenEdit) {
      btnOpenEdit.addEventListener("click", () => this.handleRegisterSale());
    }

    // Agregar evento para cerrar el modal al hacer clic en el fondo negro
    if (modalBackground) {
      modalBackground.addEventListener("click", (event) => {
        if (event.target === modalBackground) {
          this.closeCartModal();
        }
      });
    }

    // Agregar evento para cerrar el modal al hacer clic en el botón "hola"
    const btnClose = document.querySelector(".fas.fa-times") as HTMLButtonElement;
    if (btnClose) {
      btnClose.addEventListener("click", () => this.closeCartModal());
    }

    // Contador de productos
    const itemCountElement = document.querySelector(".item-count") as HTMLElement;
    let itemCount = 1; // Inicializar el contador en 1

    // Botones de incrementar y decrementar
    const btnDecrement = document.querySelector(".btn-decrement") as HTMLButtonElement;
    const btnIncrement = document.querySelector(".btn-increment") as HTMLButtonElement;

    if (btnDecrement) {
      btnDecrement.addEventListener("click", () => {
        if (itemCount > 1) { // No permitir que baje de 1
          itemCount--;
          itemCountElement.textContent = itemCount.toString();
        }
      });
    }

    if (btnIncrement) {
      btnIncrement.addEventListener("click", () => {
        itemCount++; // Incrementar sin límite
        itemCountElement.textContent = itemCount.toString();
      });
    }
  }

  // Función para abrir el modal del carrito
  showCartConfirmationModal(): void {
    const modal = document.getElementById("cart-shop-modal") as HTMLElement;
    if (modal) {
      modal.classList.remove("hidden");
    }
  }

  // Función para cerrar el modal del carrito
  closeCartModal(): void {
    const modal = document.getElementById("cart-shop-modal") as HTMLElement;
    if (modal) {
      modal.classList.add("hidden");
    }
  }

  // Nueva función para manejar la acción del botón "Registrar la venta"
  handleRegisterSale(): void {
    // Cerrar el modal del carrito
    this.closeCartModal();

    // Aquí puedes agregar la lógica que necesites, como cambiar de vista o mostrar otro componente/modal.

    console.log('Redirigiendo a registrar la venta...');
  }

  /* Confirmacion de desacer+++++++++++++++++++++++++++++++ */
  isModalOpen: boolean = false;

  openCancelModal(): void {
    this.isModalOpen = true;
  }
  closeCancelModal(): void {
    this.isModalOpen = false;
  }
  confirmCancel(): void {
    this.isModalOpen = false;
    console.log('Acción confirmada');

    window.location.reload();
  }

  /* Este es el unico codigo para desplegar el filtro de busqueda de ventas*/
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /* desplegar metodo de pago targeta */
  toggleMetodoPago(metodo: string) {
    const detallesPago = document.getElementById(`detallesPago${metodo}`);

    if (detallesPago) {
      detallesPago.classList.toggle('hidden');
    }
  }

  /* pago con yape */
  toggleBilleteraPago(billetera: string) {
    const detallesPago = document.getElementById(`detallesPago${billetera}`);

    if (detallesPago) {
      detallesPago.classList.toggle('hidden'); // Alterna la visibilidad
    }
  }
  /* pago con efectivo */
  toggleEfectivoPago(metodo: string) {
    const detallesPago = document.getElementById(`detallesPago${metodo}`);

    if (detallesPago) {
      detallesPago.classList.toggle('hidden'); // Alterna la visibilidad
    }
  }



}

