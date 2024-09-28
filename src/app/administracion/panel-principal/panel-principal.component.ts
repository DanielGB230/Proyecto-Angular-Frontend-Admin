import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-panel-principal',
  templateUrl: './panel-principal.component.html',
  styleUrls: ['./panel-principal.component.css']
})
export class PanelPrincipalComponent {
  @ViewChild('orderGraph') orderGraph!: ElementRef<HTMLCanvasElement>;
  @ViewChild('openSidebar') openSidebarButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('closeSidebar') closeSidebarButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('sidebar') sidebar!: ElementRef<HTMLElement>;
  @ViewChild('sidebarOverlay') sidebarOverlay!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.initChart();
    this.setupSidebar();
    this.adjustSidebarForResize();
    window.addEventListener('resize', this.adjustSidebarForResize.bind(this));
    window.addEventListener('load', this.adjustSidebarForResize.bind(this));
  }

  private initChart(): void {
    const ctx = this.orderGraph.nativeElement.getContext('2d');
    const chart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
          {
            label: 'Nuevos Pedidos',
            data: [65, 59, 80, 81, 56, 55, 40, 60, 80, 65, 55, 85],
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.4,
          },
          {
            label: 'Pedidos Completados',
            data: [28, 48, 40, 19, 86, 27, 90, 50, 35, 55, 80, 60],
            fill: true,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            tension: 0.4,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }

  private setupSidebar(): void {
    this.openSidebarButton.nativeElement.addEventListener('click', this.openSidebar.bind(this));
    this.closeSidebarButton.nativeElement.addEventListener('click', this.closeSidebar.bind(this));
    this.sidebarOverlay.nativeElement.addEventListener('click', this.closeSidebar.bind(this));
  }

  private openSidebar(): void {
    this.sidebar.nativeElement.classList.remove('sidebar-hidden');
    this.sidebar.nativeElement.classList.add('sidebar-visible');
    this.sidebarOverlay.nativeElement.style.display = 'block';
  }

  private closeSidebar(): void {
    this.sidebar.nativeElement.classList.remove('sidebar-visible');
    this.sidebar.nativeElement.classList.add('sidebar-hidden');
    this.sidebarOverlay.nativeElement.style.display = 'none';
  }

  private adjustSidebarForResize(): void {
    if (window.innerWidth >= 768) { // Tamaño de pantalla para escritorio
      this.sidebar.nativeElement.classList.remove('sidebar-hidden');
      this.sidebar.nativeElement.classList.add('sidebar-visible');
      this.sidebarOverlay.nativeElement.style.display = 'none';
    } else {
      this.sidebar.nativeElement.classList.add('sidebar-hidden');
      this.sidebar.nativeElement.classList.remove('sidebar-visible');
    }
  }
}
