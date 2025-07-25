import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private api = `${environment.apiUrl}/imagesbybreedid`;

  constructor(private http: HttpClient) {}

  getImagesByBreedId(breedId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}?breed_id=${breedId}`);
  }
}