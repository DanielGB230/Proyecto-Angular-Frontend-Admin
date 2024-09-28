import { AfterViewInit, Component, Injectable } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-main-catalogo',
  templateUrl: './main-catalogo.component.html',
  styleUrls: ['./main-catalogo.component.css'] 
})
@Injectable({
  providedIn: 'root',
})

export class MainCatalogoComponent implements AfterViewInit{
  productos: Producto[] = [];
  suggestions: Producto[] = [];
  categoriaSeleccionada: number = 1;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.ListarProductos().subscribe(
      (data) => {
        this.productos = data.map(producto => ({
          ...producto,
          categoria_id: producto.categoria_id,
          imagen: producto.imagen,
          descripcion: producto.descripcion,
          modelo: producto.modelo,
          marca: producto.marca,
          precio: producto.precio,
          stock: producto.stock,
          garantia: producto.garantia
        }));
      },
      (error) => {
        console.error('Error al obtener los productos', error);
      }
    );
  }
  
  
  // Método de búsqueda
  onSearch(event: any): void {
    const query = event.target.value;
    if (query) {
      this.productoService.BuscarProductos(query).subscribe(
        (data) => {
          this.suggestions = data;
        },
        (error) => {
          console.error('Error al buscar productos', error);
        }
      );
    } else {
      this.suggestions = [];
    }
  }

  // Método para seleccionar el producto de las sugerencias
  selectProduct(product: Producto): void {
    // Aquí puedes redirigir o hacer alguna acción cuando se seleccione un producto
    console.log('Producto seleccionado:', product);
  }

  ngAfterViewInit(): void {
    const button = document.querySelector('.chat-button') as HTMLElement | null;
    const modal = document.getElementById('chatModal') as HTMLElement | null;
    const closeButton = document.querySelector('.close-button') as HTMLElement | null;

    if (button && modal && closeButton) {
      // Mostrar/ocultar modal al hacer clic en el botón
      button.addEventListener('click', (e: Event) => {
        e.preventDefault();
        modal.classList.toggle('hidden');
      });

      // Cerrar modal al hacer clic en el botón de cerrar
      closeButton.addEventListener('click', (e: Event) => {
        e.preventDefault();
        modal.classList.add('hidden');
      });
    } else {
      console.error('No se encontraron algunos elementos necesarios en el DOM.');
    }
  }
}
