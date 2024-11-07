import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer-catalogo',
  standalone: true,
  imports: [RouterModule],  // Aquí agregamos RouterModule
  templateUrl: './footer-catalogo.component.html',
  styleUrls: ['./footer-catalogo.component.css']
})
export class FooterCatalogoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0); 
  }

  navigateTo(route: string) {
    this.router.navigate([route]).then(() => {
      window.scrollTo(0, 0); 
    });
  }
}
