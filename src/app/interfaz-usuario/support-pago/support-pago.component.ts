import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  

@Component({
  selector: 'app-support-pago',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './support-pago.component.html',
  styleUrls: ['./support-pago.component.css']  
})
export class SupportPagoComponent {
    constructor(private router: Router) {}  

    // Método para navegar
    navigateTo(route: string): void {
      this.router.navigate([route]);  
    }
}
