import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { KThemeService } from '../../common/k-theme.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-k-header',
  imports: [RouterLink,MatIconModule,MatMenuModule,MatButtonModule,TitleCasePipe],
  templateUrl: './k-header.component.html',
  styleUrl: './k-header.component.scss'
})
export class KHeaderComponent {

  constructor(private router: Router) {}

  protected themeService = inject(KThemeService);


  isActive(route: string): boolean {
    return this.router.url === route;
  }

}
