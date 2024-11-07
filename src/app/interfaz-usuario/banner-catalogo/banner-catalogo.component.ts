import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-banner-catalogo',
  standalone: true,
  templateUrl: './banner-catalogo.component.html',
  styleUrls: ['./banner-catalogo.component.css']
})
export class BannerCatalogoComponent implements OnInit, OnDestroy {

  private currentIndex = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  // Constructor que inyecta ChangeDetectorRef
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Pre-cargar las imágenes del carrusel
    this.preloadImages();
    // Forzar la detección de cambios para asegurar que la vista esté lista al iniciar
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    // Ajustar el tamaño del carrusel cuando la vista ya está disponible
    this.adjustCarouselHeight();
    // Iniciar el carrusel una vez el componente esté montado
    this.startCarousel();
  }

  private preloadImages(): void {
    // Precargar las imágenes de forma agresiva
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    images.forEach(image => {
      const img = new Image();
      img.src = `assets/images/${image}`;
      img.onload = () => console.log(`${image} cargada exitosamente`); // Mensaje de confirmación
    });
  }

  private adjustCarouselHeight(): void {
    // Ajuste responsivo de la altura del carrusel
    const carousel = document.getElementById('carousel') as HTMLElement | null;
    if (carousel) {
      carousel.style.height = window.innerWidth < 768 ? '300px' : '500px';
    }
  }

  private startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.changeImage();
    }, 10000); // Cambiar imagen cada 10 segundos
  }

  private changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }

  public goToPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + 3) % 3;
  }

  public goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpiar el intervalo cuando el componente se destruya
    }
  }
}
