import { Component, OnInit } from '@angular/core';
import { BreedService } from 'src/app/core/services/breed.service';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  breeds: any[] = [];
  selectedBreedId: string = '';
  selectedBreed: any = null;
  images: any[] = [];

  constructor(
    private breedService: BreedService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.breedService.getAllBreeds().subscribe(data => this.breeds = data);
  }

  onSelect(): void {
    this.breedService.getBreedById(this.selectedBreedId).subscribe(breed => {
      this.selectedBreed = breed;
    });

    this.imageService.getImagesByBreedId(this.selectedBreedId).subscribe(images => {
      this.images = images;
    });
  }
}