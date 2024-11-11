import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BolletaService {
  private apiUrl = 'https://facturacion.apisperu.com/api/v1/invoice/send';  // URL de la API para enviar la factura
  private pdfUrl = 'https://facturacion.apisperu.com/api/v1/invoice/pdf';      // URL de la API para generar el PDF

  constructor(private http: HttpClient) { }

  // Método POST para enviar la factura
  enviarFactura(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      catchError(error => {
        console.error('Error al enviar la factura:', error);
        return throwError(error);  // En caso de error, lo lanza para ser capturado en el componente
      })
    );
  }

  // Método POST para generar el PDF de la boleta
  generatePdf(data: any): Observable<Blob> {
    return this.http.post(this.pdfUrl, data, { responseType: 'blob' }).pipe(
      catchError(error => {
        console.error('Error al generar el PDF:', error);
        return throwError(error);  // En caso de error, lo lanza para ser capturado en el componente
      })
    );
  }
}

/* funcional */