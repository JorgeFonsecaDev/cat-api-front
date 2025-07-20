import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/core/services/breed.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  breeds: any[] = [];
  query: string = '';

  constructor(private breedService: BreedService) {}

  ngOnInit(): void {
    this.loadBreeds();
  }

  loadBreeds(): void {
    this.breedService.getAllBreeds().subscribe(data => this.breeds = data);
  }

  search(): void {
    if (!this.query.trim()) {
      this.loadBreeds();
      return;
    }

    this.breedService.searchBreeds(this.query).subscribe(data => this.breeds = data);
  }
}