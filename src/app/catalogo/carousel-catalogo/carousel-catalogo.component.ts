import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-carousel-catalogo',
  templateUrl: './carousel-catalogo.component.html',
  styleUrls: ['./carousel-catalogo.component.css']
})
export class CarouselCatalogoComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const carousel = document.getElementById('carousel') as HTMLElement | null;
    
    if (carousel) {
      const items = carousel.querySelectorAll('[data-carousel-item]') as NodeListOf<HTMLElement>;
      let currentIndex = 0;

      function showNextItem(): void {
        items[currentIndex].classList.toggle('hidden');
        currentIndex = (currentIndex + 1) % items.length;
        items[currentIndex].classList.toggle('hidden');
      }

      // Cambiar de banner cada 10 segundos
      setInterval(showNextItem, 10000);
    } else {
      console.error('El elemento carousel no fue encontrado en el DOM.');
    }
  }
}