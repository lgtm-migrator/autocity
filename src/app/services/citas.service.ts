import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  baseUrl = 'https://localhost:7126/api/Citas';

  constructor(private http: HttpClient) { }

  getAllEvents() {
    return this.http.get(this.baseUrl);
  }

  getOneCitaById(id: string){
    return this.http.get(this.baseUrl + '/' + id);
  }

  postCita(model: any) {
    return this.http.post(this.baseUrl, model);
  }

  deleteCita(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  updateCita(cita: Cita){
    return this.http.put(this.baseUrl + '/' + cita.id, cita);
  }
}
