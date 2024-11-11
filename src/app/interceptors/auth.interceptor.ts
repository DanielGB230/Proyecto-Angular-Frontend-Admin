// src/app/interceptors/auth.interceptor.ts
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // Token definido de manera estática en el interceptor
    private token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VybmFtZSI6IkRhbmllbHkiLCJjb21wYW55IjoiMjA1Njg1NzYxMzciLCJpYXQiOjE3MzEwOTEzODUsImV4cCI6ODAzODI5MTM4NX0.a8BvVtcHCJfmZo1LNAtolWZQpMWoaRsvFCRfr34w53p5m9JA78NbqCjwJ8Hkd7s_e-Es5lbjjWthCjAA8_RXOaVT_5mR7DKMNPGHRpnO4spNKxJKblvfUjkiK1zO6-gIQtMUVZskKSjnwZTeJmGUOuGr4JGG-50lDjv9lmGpxvdh_7_7M0l4A3cw1QI2JALiLoxUvRK-CQAFc-Q9qI4sBXGKsgWUu_kQYBvFiObciHoJTtPjijSv0cobs02w-xa7v9KmmkuwhFGB5Qt2C4hDvgun0oI9y5rpHQUx70tXay86-YmiaZ6dAj7ofzKJLHgLLlY2BjCopPrke28Km9i5aMY9oHArF7SKdcxIQd6PmuawSB8j-ckhNnRUYc2_W6GC7gTWwm9aVQRDZ0zE3rZM4-TCu_G0H5jL8ZzjPU7JHdMa1oAHpdtebaDQXcrM1OxkZe9zshfBYpYRWATosM2U8a0P4Bf03pkAzVPDM4KPE7IfQnZSJ7XJBSiCy7rjaC-CguvtXe7EQ_A59ZFy9ogABRwCi81hIfmxB5ffv72FbOVBiaG2sO_sUgLLkTAjPzAENVbJhivPD9LYncOw5yFIaop5lF28uor8Xe69SzvK8FqYYVuXf5vVC1qgT0d09TjbPjp9Ol5jBnWxK3VSz3BnMJqMGEcjrjp8HkwBz1-KApU';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Clona la solicitud y agrega el encabezado Authorization con el token
        const authReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.token}`
            }
        });

        // Envía la solicitud con el encabezado Authorization
        return next.handle(authReq);
    }
}