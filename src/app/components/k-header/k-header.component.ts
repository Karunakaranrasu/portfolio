import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-k-header',
  imports: [RouterLink],
  templateUrl: './k-header.component.html',
  styleUrl: './k-header.component.scss'
})
export class KHeaderComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
