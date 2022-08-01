import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICat } from '../models/interfaces/ICat';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CatsService {
  constructor(private http: HttpClient) {}

  cats: ICat[] = [];

  getCats(limit: number = 1): Observable<any> {
    return this.http.get<ICat[] | any>(
      `https://api.thecatapi.com/v1/breeds?limit=${limit}`,
      { headers: { 'x-api-key': environment.catApiKey }, observe: 'response' }
    );
  }
}
