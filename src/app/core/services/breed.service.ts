import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  private api = `${environment.apiUrl}/breeds`;

  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  getBreedById(id: string): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  searchBreeds(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/search?q=${query}`);
  }
}