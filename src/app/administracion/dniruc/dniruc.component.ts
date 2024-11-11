import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DnirucService } from 'src/app/service/dniruc.service';

@Component({
  selector: 'app-dniruc',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './dniruc.component.html',
  styleUrls: ['./dniruc.component.css']
})
export class DnirucComponent {
  tipoDocumento: 'dni' | 'ruc' = 'dni';
  numeroDocumento: string = '';
  resultado: any;

  constructor(private dnirucService: DnirucService) { }

  buscar(): void {
    if (this.tipoDocumento === 'dni') {
      this.dnirucService.getDniData(this.numeroDocumento).subscribe(
        (data) => this.resultado = data,
        (error) => console.error('Error en la consulta de DNI:', error)
      );
    } else {
      this.dnirucService.getRucData(this.numeroDocumento).subscribe(
        (data) => this.resultado = data,
        (error) => console.error('Error en la consulta de RUC:', error)
      );
    }
  }
}
