import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  baseUrl = 'https://localhost:7126/api/Historiales/';

  constructor(private http: HttpClient) { }

  getCarHistory(id: string): Observable<History[]> {
    return this.http.get<History[]>(this.baseUrl + id);
  }

}
