import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_KEY, BASE_URL } from '../config/config';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getImages(searchTerm: string = ''): Observable<any[]> {
    return this.http.get<any[]>(`${BASE_URL}?key=${API_KEY}&q=${searchTerm}`);
  }
}
