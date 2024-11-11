import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BolletaService } from 'src/app/service/bolleta.service';

@Component({
  selector: 'app-factura',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, CommonModule],
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent {

  facturaData = {
    ublVersion: "2.1",
    fecVencimiento: "2021-01-27T00:00:00-05:00",
    tipoOperacion: "0101",
    tipoDoc: "01",
    serie: "F001",
    correlativo: "123",
    fechaEmision: "2021-01-27T00:00:00-05:00",
    formaPago: { moneda: "PEN", tipo: "Contado" },
    tipoMoneda: "PEN",
    client: {
      tipoDoc: "6",
      numDoc: 20000000002,
      rznSocial: "Cliente",
      address: {
        direccion: "Direccion cliente",
        provincia: "LIMA",
        departamento: "LIMA",
        distrito: "LIMA",
        ubigueo: "150101"
      }
    },
    company: {
      ruc: 20568576137,
      razonSocial: "Mi empresa",
      nombreComercial: "Mi empresa",
      address: {
        direccion: "Direccion empresa",
        provincia: "LIMA",
        departamento: "LIMA",
        distrito: "LIMA",
        ubigueo: "150101"
      }
    },
    mtoOperGravadas: 200,
    mtoOperExoneradas: 100,
    mtoIGV: 36,
    totalImpuestos: 36,
    valorVenta: 300,
    subTotal: 336,
    mtoImpVenta: 336,
    details: [
      {
        codProducto: "P001",
        unidad: "NIU",
        descripcion: "PRODUCTO 1",
        cantidad: 2,
        mtoValorUnitario: 100,
        mtoValorVenta: 200,
        mtoBaseIgv: 200,
        porcentajeIgv: 18,
        igv: 36,
        tipAfeIgv: 10,
        totalImpuestos: 36,
        mtoPrecioUnitario: 118
      }
    ],
    legends: [
      {
        code: "1000",
        value: "SON TRESCIENTOS TREINTA Y SEIS CON OO/100 SOLES"
      }
    ]
  };

  mostrarResumen: boolean = false; // Flag para mostrar el resumen

  constructor(private bolletaService: BolletaService) { }

  mostrarResumenDeFactura(): void {
    this.mostrarResumen = true;
  }

  ocultarResumen(): void {
    this.mostrarResumen = false;
  }

  enviarFactura(): void {
    if (this.validarFactura()) {
      this.bolletaService.enviarFactura(this.facturaData).subscribe(
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

  validarFactura(): boolean {
    if (!this.facturaData.client.rznSocial || !this.facturaData.client.numDoc) {
      return false;
    }
    for (let detail of this.facturaData.details) {
      if (!detail.codProducto || !detail.descripcion || detail.cantidad <= 0) {
        return false;
      }
    }
    return true;
  }

  addDetail(): void {
    this.facturaData.details.push({
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


  removeDetail(index: number): void {
    this.facturaData.details.splice(index, 1);
  }

  generarPdf(): void {
    this.bolletaService.generatePdf(this.facturaData).subscribe(
      (response) => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `factura_${this.facturaData.serie}${this.facturaData.correlativo}.pdf`;
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
/* funcional factura */