import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FacturaService } from 'src/app/service/factura.service';

@Component({
  selector: 'app-boleto',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, CommonModule],
  templateUrl: './boleto.component.html',
  styleUrls: ['./boleto.component.css']
})
export class BoletoComponent {

  // Definición de boletoData con tipado
  boletoData = {
    ublVersion: '2.1',
    tipoOperacion: '0101',
    tipoDoc: '03',
    serie: 'B001',
    correlativo: 1,
    fechaEmision: '2021-01-27T00:00:00-05:00',
    formaPago: {
      moneda: 'PEN',
      tipo: 'Contado'
    },
    tipoMoneda: 'PEN',
    client: {
      tipoDoc: '6',
      numDoc: 20000000002,
      rznSocial: 'Cliente',
      address: {
        direccion: 'Direccion cliente',
        provincia: 'LIMA',
        departamento: 'LIMA',
        distrito: 'LIMA',
        ubigueo: '150101'
      }
    },
    company: {
      ruc: 20568576137,
      razonSocial: 'INNOVA CONSTRUCTION S.A.C',
      nombreComercial: 'Mi empresa',
      address: {
        direccion: 'JR. JUNIN MZA. H URB. SATIPO (NRO. 283 - PARQUE SANTA LEONOR S71717650) JUNIN - SATIPO - SATIPO',
        provincia: 'SATIPO',
        departamento: 'JUNÌN',
        distrito: 'SATIPO',
        ubigueo: '0051'
      }
    },
    mtoOperGravadas: 100,
    mtoIGV: 18,
    valorVenta: 100,
    totalImpuestos: 18,
    subTotal: 118,
    mtoImpVenta: 118,
    details: [
      {
        codProducto: 'P001',
        unidad: 'NIU',
        descripcion: 'PRODUCTO 1',
        cantidad: 2,
        mtoValorUnitario: 50,
        mtoValorVenta: 100,
        mtoBaseIgv: 100,
        porcentajeIgv: 18,
        igv: 18,
        tipAfeIgv: 10,
        totalImpuestos: 18,
        mtoPrecioUnitario: 59
      }
    ],
    legends: [
      {
        code: '1000',
        value: 'SON CIENTO DIECIOCHO CON 00/100 SOLES'
      }
    ]
  };

  mostrarResumen: boolean = false; // Flag para mostrar el resumen

  constructor(private facturaService: FacturaService) { }

  // Método para mostrar el resumen
  mostrarResumenDeBoleto(): void {
    this.mostrarResumen = true;
  }

  // Método para ocultar el resumen
  ocultarResumen(): void {
    this.mostrarResumen = false;
  }

  // Método para enviar la factura
  enviarBoleto(): void {
    if (this.validarBoleto()) {
      this.facturaService.createFactura(this.boletoData).subscribe(
        (response: any) => {
          console.log('Factura enviada:', response);
          alert('Factura enviada con éxito.');
          this.generarPdf();
        },
        (error: any) => {
          console.error('Error al enviar la factura:', error);
          alert('Hubo un error al enviar la factura. Intenta nuevamente.');
        }
      );
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }

  // Método para validar los detalles de la factura
  validarBoleto(): boolean {
    if (!this.boletoData.client.rznSocial || !this.boletoData.client.numDoc) {
      return false;
    }
    for (let detail of this.boletoData.details) {
      if (!detail.codProducto || !detail.descripcion || detail.cantidad <= 0) {
        return false;
      }
    }
    return true;
  }

  // Método para agregar un nuevo detalle a la factura
  addDetail(): void {
    this.boletoData.details.push({
      codProducto: '',
      unidad: '',
      descripcion: '',
      cantidad: 0,
      mtoValorUnitario: 0,
      mtoValorVenta: 0,
      mtoBaseIgv: 0,
      porcentajeIgv: 0,
      igv: 0,
      tipAfeIgv: 0,
      totalImpuestos: 0,
      mtoPrecioUnitario: 0
    });
  }

  // Método para eliminar un detalle específico
  removeDetail(index: number): void {
    this.boletoData.details.splice(index, 1);
  }

  // Método para generar y descargar el PDF de la boleta
  generarPdf(): void {
    this.facturaService.generatePdf(this.boletoData).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `boleta_${this.boletoData.serie}${this.boletoData.correlativo}.pdf`; // Nombre del archivo PDF
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      (error) => {
        console.error('Error al generar el PDF:', error);
        alert('Hubo un error al generar el PDF. Intenta nuevamente.');
      }
    );
  }
}

/* funcional 02 */