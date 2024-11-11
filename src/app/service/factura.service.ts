// src/app/services/factura.service.ts
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private apiUrl = 'https://facturacion.apisperu.com/api/v1/invoice/send';  // URL de la API para enviar la factura
  private pdfUrl = 'https://facturacion.apisperu.com/api/v1/invoice/pdf';    // URL de la API para generar el PDF

  constructor(private http: HttpClient) { }

  // Método GET para obtener las facturas
  getFacturas(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener las facturas:', error);
        return throwError(error);
      })
    );
  }

  // Método POST para crear una factura
  createFactura(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      catchError(error => {
        console.error('Error al crear la factura:', error);
        return throwError(error);
      })
    );
  }

  // Método POST para generar el PDF de la boleta
  generatePdf(data: any): Observable<any> {
    return this.http.post(this.pdfUrl, data, { responseType: 'blob' }).pipe(
      catchError(error => {
        console.error('Error al generar el PDF:', error);
        return throwError(error);
      })
    );
  }
}

/* Funcional */