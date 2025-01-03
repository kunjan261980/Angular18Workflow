import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-loader',
  imports: [CommonModule],
  templateUrl: './app-loader.component.html',
  styleUrl: './app-loader.component.css'
})
export class AppLoaderComponent {
  loading$

  constructor(private loadingService: LoadingService) {
    this.loading$ = this.loadingService.loading$
  }

}
