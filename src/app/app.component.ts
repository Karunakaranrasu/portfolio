import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KHeaderComponent } from './components/k-header/k-header.component';
import { KFooterComponent } from './components/k-footer/k-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KHeaderComponent, KFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Portfolio';
}
