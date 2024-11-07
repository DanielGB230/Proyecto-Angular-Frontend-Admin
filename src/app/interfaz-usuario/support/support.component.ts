import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
