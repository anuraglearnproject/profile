import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from '../../services/data-loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-loader',
  imports: [CommonModule],
  templateUrl: './page-loader.component.html',
  styleUrl: './page-loader.component.css'
})
export class PageLoaderComponent implements OnInit {
  private dataServe: DataLoaderService;
  url: string = '';
  constructor(dataServe: DataLoaderService) {
    this.dataServe = dataServe;
  }
  ngOnInit(): void {
    this.dataServe.currentUrl$.subscribe(url => {
      this.url = url;
    });
    this.dataServe.loadData();
  }
}
