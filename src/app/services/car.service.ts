import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl = 'https://localhost:7126/api/Cars';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.baseUrl);
  }

  postNewCar(car: Car): Observable<Car>{
    return this.http.post<Car>(this.baseUrl, car);
  }
}
