import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICat, ICatImage } from '../models/interfaces/ICat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient) {}

  cats: ICat[] = [];

  getFilteredCats(query: string): Observable<any> {
    return this.http.get<ICat[]>(
      `https://api.thecatapi.com/v1/breeds/search?q=${query}`,
      { headers: { 'x-api-key': environment.catApiKey } }
    );
  }

  getCats(limit: number = 10, page: number = 0): Observable<any> {
    return this.http.get<any>(
      `https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`,
      { headers: { 'x-api-key': environment.catApiKey }, observe: 'response' }
    );
  }

  getCatImage(imageId: string | undefined) {
    return this.http.get<ICatImage>(
      `https://api.thecatapi.com/v1/images/${imageId}`
    );
  }
}
