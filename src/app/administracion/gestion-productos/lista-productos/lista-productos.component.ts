import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductBody, Producto } from 'src/app/shared/models/producto';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-lista-productos',
    templateUrl: './lista-productos.component.html',
    styleUrls: ['./lista-productos.component.css'],
    standalone: true,
    imports: [NgFor, FormsModule, CurrencyPipe]
})
export class ListaProductosComponent implements OnInit {
  cargaDatos: 'none' | 'loading' | 'done' | 'error' = "none";
  createProductState: 'none' | 'loading' | 'done' | 'error' = "none";
  products: Producto[] = [];
  showFormProduct: 'none' | 'edit' | 'add' = 'none';
  formProduct: FormGroup;
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.formProduct = this.fb.group({
      Nombre: ['', [Validators.required]],
      Imagen: ['', [Validators.required]],
      Descripcion: ['', [Validators.required]],
      Modelo: ['', [Validators.required]],
      PrecioVenta: [null, [Validators.required, Validators.min(0)]],
      UtilidadPrecioVenta: [null, [Validators.required, Validators.min(0)]],
      UtilidadPorcentaje: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?%?$/)]],
      Stock: [null, [Validators.required, Validators.min(0)]],
      Garantia: [null, [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    // Llamando la API
    this.listAll();

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
  
  // Implementando APIS
  listAll() {
    this.cargaDatos = 'loading';
    this.productService.list().subscribe({
      next: (data) => {
        this.cargaDatos = 'done',
        this.products = data;
      },
      error: (_) => {
        this.cargaDatos = 'error';
      }
    });
  }

  addProduct() {
    this.showFormProduct = "add";
    this.createProductState = 'none';
  }

  removeProduct(product: Producto) {
    // Lógica para eliminar, podrías mostrar un modal de confirmación antes
    this.productService.remove(product.id).subscribe(() => {
      this.products = this.products.filter(b => b.id !== product.id);
      console.log('Marca eliminada');
    }, (err) => {
      console.error('Error al eliminar la marca', err);
    });
  }
  
  confirmDelete(productId: number) {
    this.productService.remove(productId).subscribe({
      next: (res) => {
        // this.listAll();
        this.products = this.products.filter(b => b.id != productId);
      },
      error: (err) => {}
    });
  }
  cancelDelete(product: Producto) {
    product.remove = false;
  }

  createProduct(){
    console.log(this.formProduct);
    this.createProductState = 'loading';
    this.productService.create(this.formProduct.value as ProductBody).subscribe({
      next: (data) => {
        this.createProductState = 'done';
        // this.listAll();
        this.products.push(data);
      },
      error: (err) => {
        this.createProductState = 'error';
      }
    });
  }

  






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

  // initializeConfirmButtons: Inicializa los eventos de los botones del modal de confirmación.
  initializeConfirmButtons(): void {
    const btnOpenModal = document.querySelector(".btn-open-confirm") as HTMLButtonElement;
    const btnConfirmYes = document.getElementById("btn-confirm-yes") as HTMLButtonElement;
    const btnConfirmNo = document.getElementById("btn-confirm-no") as HTMLButtonElement;

    if (btnOpenModal) {
      btnOpenModal.addEventListener("click", () => this.openConfirmClearModal());
    }

    if (btnConfirmYes) {
      btnConfirmYes.addEventListener("click", () => this.confirmClear());
    }

    if (btnConfirmNo) {
      btnConfirmNo.addEventListener("click", () => this.closeConfirmClearModal());
    }
  }
}
