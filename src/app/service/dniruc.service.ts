// src/app/services/dniruc.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DnirucService {
  private readonly apiUrlDni = '/api/v1/dni/';
  private readonly apiUrlRuc = '/api/v1/ruc/';
  private readonly token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImkyMzEwMzU0QGNvbnRpbmVudGFsLmVkdS5wZSJ9.IlitgqosAa39PTim3nQ7iHdjGUiC8GK7Gwf_UEryXzw';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });
  }

  getDniData(dni: string): Observable<any> {
    return this.http.get(`${this.apiUrlDni}${dni}`, { headers: this.getHeaders() });
  }

  getRucData(ruc: string): Observable<any> {
    return this.http.get(`${this.apiUrlRuc}${ruc}`, { headers: this.getHeaders() });
  }
}
